export function getImageUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("/")) return url;
  return `https:${url}`;
}
