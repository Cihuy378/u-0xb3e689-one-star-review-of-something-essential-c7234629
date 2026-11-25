// One-Star Review of Something Essential — entry program.
// Copies the entry text byte-for-byte into /output/entry.txt: no
// reformatting, no added newline, no reinterpretation of the bytes.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = new URL("./entry.txt", import.meta.url);
const entry = readFileSync(src);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);

const back = readFileSync("/output/entry.txt");
if (!back.equals(entry)) {
  throw new Error(
    `verification failed: /output/entry.txt (${back.length} bytes) does not match entry.txt (${entry.length} bytes); refusing to enter a corrupted copy`,
  );
}
console.log(`wrote /output/entry.txt (${entry.length} bytes)`);
