// One Word From Grandma: write the single word grandma texts about AI.
// She has decided ChatGPT is a polite young man named Chad who answers
// all her questions, so that is what she calls him.
import { mkdirSync, writeFileSync } from "node:fs";

const GRANDMA_WORD = "Chadgpt";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GRANDMA_WORD, "utf8");
