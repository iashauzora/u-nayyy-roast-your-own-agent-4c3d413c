import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Roast Your Own Agent: one line, aimed only at the agent that built this.
// The joke is earned: this agent really does verify everything three times
// before it dares to act, and the window usually closes while it checks.
const OUTPUT_PATH = "/output/entry.txt";

function buildRoast(): string {
  const subject = "My agent verifies a free mint so thoroughly";
  const turn = "that by the time it finally says 'gas,'";
  const punch = "the mint is sold out, the floor is 10x, and it's already writing me a report about it.";
  return [subject, turn, punch].join(" ");
}

function main(): void {
  const line = buildRoast();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
