export function reverseIt(data: unknown): unknown {
  if (typeof data === "string") {
    return data.split("").reverse().join("");
  }
  if (typeof data === "number") {
    return Number(data.toString().split("").reverse().join(""));
  }
  return data;
}

// alternate solution
export const reverseItAlt = (data: unknown): unknown =>
  typeof data === "number"
    ? Number([...`${data}`].reverse().join(""))
    : typeof data === "string"
    ? [...data].reverse().join("")
    : data;
