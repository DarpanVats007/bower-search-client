export const getOwnerFromUrl = (url: string): string => {
  if (!url) {
    return "Unknown Owner";
  }

  const match = url.match(/github\.com\/([^/]+)/);
  return match ? match[1] : "Unknown Owner";
};
