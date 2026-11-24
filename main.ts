import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the front-page image out of the repo, byte for byte.
// Deterministic: no network, no randomness, no timestamps —
// every run writes the exact same bytes to /output/entry.png.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const out = "/output/entry.png";

mkdirSync(dirname(out), { recursive: true });
copyFileSync(src, out);
