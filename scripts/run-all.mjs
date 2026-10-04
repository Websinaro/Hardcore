// Usage: node scripts/run-all.mjs <install|dev>
// Runs the given npm command in selector, ui1, ui2 and ui3 (no extra dependencies).
import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cmd = process.argv[2] ?? "dev";
const dirs = ["selector", "ui1", "ui2", "ui3"];
const args = cmd === "install" ? ["install"] : ["run", cmd];
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const shell = process.platform === "win32";

const run = (dir) => new Promise((ok, fail) => {
  const p = spawn(npm, args, { cwd: resolve(root, dir), stdio: "inherit", shell });
  p.on("exit", (c) => (c === 0 ? ok() : fail(new Error(`${dir} exited with ${c}`))));
});

if (cmd === "install") {
  for (const d of dirs) await run(d);
} else {
  await Promise.all(dirs.map(run));
}
