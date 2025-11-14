import { parseVideoData } from "./vk_video_parser.js";
import { delay } from "./utils.js";

/**
* Mock search function simulating VK content retrieval.
* In production, replace with VK API or scraper logic.
*/
export async function searchVK(query, settings) {
await delay(300);

const limit = settings.limit || 5;
const results = [];

for (let i = 0; i < limit; i++) {
results.push(
parseVideoData({
title: `Sample Video ${i + 1} for ${query}`,
url: `https://vk.com/video_mock_${encodeURIComponent(query)}_${i}`,
type: "video",
description: `This is a mock description for query: ${query}`,
views: Math.floor(Math.random() * 10000),
likes: Math.floor(Math.random() * 500),
duration: Math.floor(Math.random() * 200),
uploader: `user_${Math.floor(Math.random() * 9999)}`,
timestamp: Math.floor(Date.now() / 1000)
})
);
}

return results;
}