import fs from "fs";
import path from "path";

/**
* Exports results to JSON in the data directory.
*/
export function exportResults(results) {
const outputPath = path.join(process.cwd(), "VK Extractor", "data", "sample_output.json");
try {
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
console.log(`Output written to: data/sample_output.json`);
} catch (err) {
console.error("Failed to write output:", err.message);
}
}