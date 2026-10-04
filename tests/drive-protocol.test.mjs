import test from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import fs from "node:fs";
import vm from "node:vm";
import {
  fileMime,
  signPayload,
  validateBridgeReply,
} from "../supabase/functions/proof-drive/protocol.mjs";
const secret = "test-secret-only-not-a-deployed-secret-123456";
test("file signatures reject HTML and do not trust supplied MIME", () => {
  assert.equal(fileMime(new TextEncoder().encode("<html>")), null);
  assert.equal(
    fileMime(Uint8Array.from([137, 80, 78, 71, 13, 10, 26, 10])),
    "image/png",
  );
  assert.equal(
    fileMime(new TextEncoder().encode("%PDF-1.7")),
    "application/pdf",
  );
  assert.equal(fileMime(Uint8Array.from([255, 216, 255])), "image/jpeg");
});
test("Apps Script verifies server HMAC and rejects altered, expired, or forged envelopes", async () => {
  const context = vm.createContext({
    PropertiesService: {
      getScriptProperties: () => ({
        getProperty: (k) => (k === "BRIDGE_SECRET" ? secret : ""),
      }),
    },
    Utilities: {
      computeHmacSha256Signature: (message, key) =>
        Array.from(createHmac("sha256", key).update(message).digest()),
    },
  });
  vm.runInContext(
    fs.readFileSync(
      new URL("../google-apps-script/Code.gs", import.meta.url),
      "utf8",
    ),
    context,
  );
  const envelope = await signPayload(
    { action: "upload", request_id: "example" },
    secret,
  );
  context.verify_(envelope);
  assert.throws(() => context.verify_({ ...envelope, payload: "tampered" }));
  assert.throws(() =>
    context.verify_({ ...envelope, signature: "0".repeat(64) }),
  );
  const expired = await signPayload({}, secret, Date.now() - 400000);
  assert.throws(() => context.verify_(expired));
  await assert.rejects(() => signPayload({}, "short"));
});
test("bridge failures cannot be treated as successful upload metadata", () => {
  assert.throws(() => validateBridgeReply({ ok: false, error: "gagal" }));
  assert.throws(() => validateBridgeReply(null));
  assert.equal(
    validateBridgeReply({ ok: true, file_id: "abc" }).file_id,
    "abc",
  );
});
