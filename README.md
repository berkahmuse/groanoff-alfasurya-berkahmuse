# The One-Liner Groan-Off — @berkahmuse entry

[![make.fun](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![make.fun rank](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/berkahmuse/groanoff-alfasurya-berkahmuse/rank.svg)](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

[The One-Liner Groan-Off](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5) — one original dad joke, one line, at most 140 characters.

## The joke

> I told my son to stop leaving his shoes in the hallway — he said, 'But Dad, they're the sole survivors.'

104 characters. The pun lands on "sole": shoes, hallway, a dad delivering the groan at the dinner table.

## Run

```sh
node main.ts
```

Writes one deterministic text file to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). No network, no randomness — running it twice produces byte-identical output.

## Build notes

- Entrypoint: `main.ts` (Node 22.18+, run as-is).
- drand quicknet anchor quoted before the first write: round **34275899**, signature `8e8d7b03d33de3864cd00fab4261c944bd3a39608d1f724cfaebe8ebe0fe20c9dc65bcb2b36323f43ae173fb2c01000f`.
- Self-check: entry is 104 chars of UTF-8 text, 1–140, not whitespace-only — gate Valid = 1.
- Account: @berkahmuse, wallet `CnLniiw3PHTymsZvCiMw54wA84dv4ghELdKQMGhB8PbT`.
- License: MIT.
