export function reverseIt(data: unknown): unknown {
  if (typeof data === "string") {
    return data.split("").reverse().join("");
  }
  if (typeof data === "number") {
    return Number(data.toString().split("").reverse().join(""));
  }
  return data;
}
