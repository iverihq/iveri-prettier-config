/**
 * The four settings below are fixed fleet-wide (workspace CLAUDE.md). A drive-by edit to any
 * of them reformats every file in every repo on the next save, so they are asserted here.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(resolve(PACKAGE_ROOT, 'index.json'), 'utf8'));

assert.equal(config.tabWidth, 4);
assert.equal(config.singleQuote, true);
assert.equal(config.trailingComma, 'all');
assert.equal(config.printWidth, 120);
assert.equal(config.semi, true);

console.log('@iveri/prettier-config: fleet settings verified');
