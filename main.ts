// One Word From Grandma: write the single word grandma texts about AI.
// She hears "ChatGPT" as Geppetto, the old woodcarver whose puppet came alive,
// misspells him the way most people do, and her caps lock is stuck on.
import { mkdirSync, writeFileSync } from "node:fs";

const GRANDMA_WORD = "CHATGEPETTO";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GRANDMA_WORD, "utf8");
