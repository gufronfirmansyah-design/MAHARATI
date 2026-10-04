export function fileMime(bytes) {
  if (
    bytes.length >= 8 &&
    [137, 80, 78, 71, 13, 10, 26, 10].every((b, i) => bytes[i] === b)
  )
    return "image/png";
  if (
    bytes.length >= 3 &&
    bytes[0] === 255 &&
    bytes[1] === 216 &&
    bytes[2] === 255
  )
    return "image/jpeg";
  if (
    bytes.length >= 5 &&
    String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-"
  )
    return "application/pdf";
  return null;
}
export async function signPayload(
  payload,
  secret,
  now = Date.now(),
  nonce = crypto.randomUUID(),
) {
  if (secret.length < 32)
    throw Error("Rahasia penghubung harus minimal 32 karakter.");
  const body = JSON.stringify(payload),
    message = now + "." + nonce + "." + body;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bytes = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message)),
  );
  return {
    timestamp: now,
    nonce,
    payload: body,
    signature: Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join(
      "",
    ),
  };
}
export function validateBridgeReply(result) {
  if (!result || result.ok !== true)
    throw Error(result?.error || "Penghubung Drive menolak permintaan.");
  return result;
}
