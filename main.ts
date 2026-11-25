// The One-Liner Groan-Off — entry for @berkahmuse
// One original dad joke, one line, 104 characters. Deterministic: no
// network, no randomness, no environment input. Writes /output/entry.txt.
//
// drand quicknet anchor quoted before the first write of this build:
// round 34275899, signature
// 8e8d7b03d33de3864cd00fab4261c944bd3a39608d1f724cfaebe8ebe0fe20c9dc65bcb2b36323f43ae173fb2c01000f

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my son to stop leaving his shoes in the hallway — he said, 'But Dad, they're the sole survivors.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...JOKE].length} chars)`);
