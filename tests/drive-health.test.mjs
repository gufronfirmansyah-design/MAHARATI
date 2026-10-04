import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import {
  fileMime,
  signPayload,
  validateBridgeReply,
} from "../supabase/functions/proof-drive/protocol.mjs";
const source = fs
  .readFileSync(
    new URL("../supabase/functions/proof-drive/index.ts", import.meta.url),
    "utf8",
  )
  .replace(/^import .*;\r?\n/gm, "");
const js = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
  },
}).outputText;
function setup({ admin = true, user = true, version = "2026-10-04" } = {}) {
  let handler,
    calls = 0;
  const chain = {
    select() {
      return this;
    },
    eq() {
      return this;
    },
    limit: async () => ({ error: null }),
    single: async () => ({ data: { is_admin: admin } }),
  };
  const context = vm.createContext({
    Request,
    Response,
    AbortSignal,
    crypto,
    Uint8Array,
    atob,
    TextEncoder,
    JSON,
    Error,
    Date,
    Number,
    Array,
    console,
    fileMime,
    signPayload,
    validateBridgeReply,
    createClient: () => ({
      auth: {
        getUser: async () => ({
          data: { user: user ? { id: "u" } : null },
          error: null,
        }),
      },
      from: () => chain,
    }),
    fetch: async () => {
      calls++;
      return Response.json({ ok: true, bridge_version: version });
    },
    Deno: {
      env: {
        get: (k) =>
          ({
            SUPABASE_URL: "https://test.invalid",
            SUPABASE_ANON_KEY: "test",
            SUPABASE_SERVICE_ROLE_KEY: "test-server",
            DRIVE_BRIDGE_URL: "https://script.google.com/macros/s/test/exec",
            DRIVE_BRIDGE_SECRET: "test-only-secret-at-least-32-characters",
            ALLOWED_ORIGINS: "https://app.invalid",
          })[k],
      },
      serve: (fn) => (handler = fn),
    },
  });
  vm.runInContext(js, context);
  return {
    call: () =>
      handler(
        new Request("https://test.invalid", {
          method: "POST",
          headers: {
            Authorization: "Bearer test",
            Origin: "https://app.invalid",
          },
          body: JSON.stringify({ action: "health" }),
        }),
      ),
    calls: () => calls,
  };
}
test("Drive health rejects missing user and non-admin before calling Apps Script", async () => {
  for (const [options, status] of [
    [{ user: false }, 401],
    [{ admin: false }, 403],
  ]) {
    const h = setup(options);
    assert.equal((await h.call()).status, status);
    assert.equal(h.calls(), 0);
  }
});
test("Drive health requires authenticated bridge version and supports configured CORS", async () => {
  const h = setup();
  const r = await h.call();
  assert.equal(r.status, 200);
  assert.equal(
    r.headers.get("Access-Control-Allow-Origin"),
    "https://app.invalid",
  );
  assert.equal((await r.json()).bridge_version, "2026-10-04");
  assert.equal(h.calls(), 1);
  const old = await setup({ version: "old" }).call();
  assert.equal(old.status, 400);
  assert.match((await old.json()).error, /versi Apps Script/);
});
