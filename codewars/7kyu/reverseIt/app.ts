export function reverseIt(data: unknown): unknown {
  if (typeof data === "string") {
    // Reverse string
    return data.split("").reverse().join("");
  }
  if (typeof data === "number") {
    // Reverse number
    return Number(data.toString().split("").reverse().join(""));
  }
  // Return as-is for other types
  return data;
}
