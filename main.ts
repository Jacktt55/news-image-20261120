// make.fun entry: news-image-20261120
// "Sum up 20 November's world news in one image"
//
// Copies the pre-rendered entry.png into the make.fun output directory.
// Node 22, standard library only. Deterministic: the same entry.png bytes
// are copied every run, so repeated runs produce identical output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`entry.png not found at ${src}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`copied entry.png -> ${dest}`);
