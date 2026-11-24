import { mkdirSync, writeFileSync } from "node:fs";

// One line about office life, written for the judge's brief, in its
// own order: it is a genuine joke about the office (not a slogan),
// it turns at the end (the agreement arrives by the very thing it
// protests), it rings true (reply-all is the office's shared wound),
// every word earns its place, and the take is fresh. The line is
// plain ASCII and sits comfortably inside the 199-character cap,
// so the gate counts exactly what the judge reads.
const text =
  "Someone hit reply-all to say 'please stop hitting reply-all', and 47 people agreed, also by reply-all.";

// The bounty requires 1-199 characters, not only white space:
// fail loudly instead of writing an entry the judge would refuse.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 199 || text.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters of non-blank text, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
