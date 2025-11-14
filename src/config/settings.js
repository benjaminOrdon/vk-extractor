import fs from "fs";
import path from "path";

/**
* Loads and validates settings from example file.
*/
export function loadSettings() {
const settingsPath = path.join(process.cwd(), "VK Extractor", "src", "config", "settings.example.json");
try {
const raw = fs.readFileSync(settingsPath, "utf8");
const config = JSON.parse(raw);
return config;
} catch (err) {
console.error("Failed to load settings:", err.message);
return { limit: 5 };
}
}