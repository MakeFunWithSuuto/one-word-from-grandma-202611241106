// One Word From Grandma: write the single word grandma texts about AI.
// She mixes up ChatGPT with the GPS in the car, and her caps lock is stuck on.
import { mkdirSync, writeFileSync } from "node:fs";

const GRANDMA_WORD = "CHATGPS";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GRANDMA_WORD, "utf8");
