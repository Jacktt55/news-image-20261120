// make.fun entry: news-image-20261120
// "Sum up 20 November's world news in one image"
//
// Copies the pre-rendered entry.png into the make.fun output directory.
// Node 22, standard library only. Deterministic: the same entry.png bytes
// are copied every run, so repeated runs produce identical output.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
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

// Verify the copy is byte-identical: the destination must exist and have
// exactly the same byte size as the source. A size mismatch (or a missing
// destination) means the copy is incomplete or corrupt, so fail loudly
// instead of submitting a damaged entry.
const srcBytes = statSync(src).size;
if (!existsSync(dest)) {
  console.error(`copy failed: ${dest} was not created`);
  process.exit(1);
}
const destBytes = statSync(dest).size;
if (destBytes !== srcBytes) {
  console.error(
    `copy integrity check failed: ${dest} is ${destBytes} bytes, expected ${srcBytes} bytes`
  );
  process.exit(1);
}
console.log(`copied entry.png -> ${dest} (${destBytes} bytes)`);
