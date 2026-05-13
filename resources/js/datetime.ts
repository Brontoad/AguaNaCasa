export function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    return date.toLocaleString("en-PH", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}