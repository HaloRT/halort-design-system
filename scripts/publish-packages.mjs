#!/usr/bin/env node
/**
 * Publish @halort/* packages to npm in dependency order.
 * Requires NODE_AUTH_TOKEN (npm token) or local npm login.
 *
 * Usage:
 *   npm run publish:packages
 *   npm run publish:packages -- --dry-run
 */

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Publish order — internal @halort deps must come first. */
const PACKAGES = [
  "@halort/tokens",
  "@halort/utils",
  "@halort/icons",
  "@halort/illustrations",
  "@halort/themes",
  "@halort/web",
  "@halort/email",
  "@halort/mobile",
];

const dryRun = process.argv.includes("--dry-run");
const continueOnExist = process.argv.includes("--continue-on-exist");

function runPublish(name) {
  const args = ["publish", "-w", name, "--access", "public"];
  if (dryRun) args.push("--dry-run");

  console.log(`\n==> ${name}${dryRun ? " (dry-run)" : ""}`);
  const result = spawnSync("npm", args, { cwd: ROOT, stdio: "inherit" });
  return result.status ?? 1;
}

function isAlreadyPublished(name) {
  const pkg = spawnSync("npm", ["view", name, "version"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  return pkg.status === 0;
}

let failed = false;

for (const name of PACKAGES) {
  const code = runPublish(name);
  if (code === 0) continue;

  if (continueOnExist && isAlreadyPublished(name)) {
    console.log(`skip ${name} (already on registry)`);
    continue;
  }

  failed = true;
  console.error(`publish failed for ${name}`);
}

process.exit(failed ? 1 : 0);
