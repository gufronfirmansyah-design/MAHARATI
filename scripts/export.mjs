import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
const destination = path.resolve(root, "../MAHARATI-SIAP-UPLOAD");
const allowed = [
  "src",
  "public",
  "supabase",
  "google-apps-script",
  "tests",
  "scripts",
  "docs",
  ".github",
  "package.json",
  "package-lock.json",
  "index.html",
  "tsconfig.json",
  "vite.config.ts",
  ".gitignore",
  ".env.example",
  "README.md",
];
fs.mkdirSync(destination, { recursive: true });
for (const name of allowed) {
  const source = path.join(root, name);
  if (fs.existsSync(source))
    fs.cpSync(source, path.join(destination, name), { recursive: true });
}
console.log("Paket sumber GitHub: " + destination);
