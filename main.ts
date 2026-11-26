import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const programUrl = import.meta.url;
const line = "We are Uber for breadcrumbs: 40,000 couriers already stationed on every statue downtown, zero salaries, paid entirely in what falls off your sandwich.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDirectory}/entry.txt`;

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, `${line}\n`, "utf8");

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `${programUrl}: entry.txt must contain 1–200 characters after trimming; got ${characterCount}.`,
  );
}
