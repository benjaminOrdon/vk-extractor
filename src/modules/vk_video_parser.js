js/**
 * Parses raw mock VK data into structured format.
 */
export function parseVideoData(data) {
  return {
    title: data.title,
    url: data.url,
    type: data.type,
    description: data.description,
    views: data.views,
    likes: data.likes,
    duration: data.duration,
    uploader: data.uploader,
    timestamp: data.timestamp
  };
}