import { loadSettings } from "./config/settings.js";
import { searchVK } from "./modules/vk_search.js";
import { exportResults } from "./output/export.js";
import fs from "fs";
import path from "path";

/**
* Entry point of the VK Extractor application.
* Reads queries, performs searches, and exports structured output.
*/
async function main() {
try {
const settings = loadSettings();

const queriesFile = path.join(process.cwd(), "VK Extractor", "data", "queries.sample.txt");
const queries = fs.readFileSync(queriesFile, "utf8")
.split("\n")
.map(q => q.trim())
.filter(Boolean);

console.log(`Loaded ${queries.length} queries...`);

const allResults = [];
for (const query of queries) {
console.log(`Searching for: ${query}`);
const results = await searchVK(query, settings);
allResults.push(...results);
}

exportResults(allResults);
console.log("Extraction complete.");
} catch (err) {
console.error("Fatal error:", err.message);
process.exit(1);
}
}

main();