export default function timeAgo(timestamp) {
  const now = new Date();
  const questionDate = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const secondsAgo = Math.floor((now - questionDate) / 1000);

  const units = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const count = Math.floor(secondsAgo / unit.seconds);
    if (count > 0) {
      return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
