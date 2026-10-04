import { spawn } from "node:child_process";
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4173",
    "--strictPort",
  ],
  { stdio: "pipe" },
);
let output = "";
server.stdout.on("data", (x) => (output += x));
server.stderr.on("data", (x) => (output += x));
async function run(file, env = {}) {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [file], {
      stdio: "inherit",
      env: { ...process.env, ...env },
    });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(Error(file + " failed: " + code)),
    );
  });
}
try {
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch("http://127.0.0.1:4173")).ok) break;
    } catch {}
    if (i === 79) throw Error(output || "Preview unavailable");
    await new Promise((r) => setTimeout(r, 250));
  }
  await run("tests/browser.mjs", { TEST_URL: "http://127.0.0.1:4173" });
  await run("tests/member-browser.mjs");
} finally {
  server.kill();
}
