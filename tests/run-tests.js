import assert from "assert";
import { parseVideoData } from "../src/modules/vk_video_parser.js";

function testParseVideoData() {
const input = {
title: "Test",
url: "https://vk.com/test",
type: "video",
description: "desc",
views: 10,
likes: 2,
duration: 45,
uploader: "tester",
timestamp: 123456
};

const out = parseVideoData(input);

assert.strictEqual(out.title, input.title);
assert.strictEqual(out.url, input.url);
assert.strictEqual(out.type, input.type);
assert.strictEqual(out.uploader, input.uploader);
}

testParseVideoData();
console.log("All tests passed.");