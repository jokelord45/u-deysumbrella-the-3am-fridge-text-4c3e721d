// The 3AM Fridge Text — revised draft.
// Revision: the first draft counted visits; this one is funnier because
// the fridge talks back like a bored witness — you keep checking as if
// the contents changed in the last hour, and the punchline lands on
// "leftovers and regret". Fresh angle (no milk, no ice, no door left open),
// one line, lock-screen short, complete without a follow-up.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. You keep opening me like the answer changed since 2am. It didn't. It's still leftovers and regret.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
