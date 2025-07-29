export function esrever(str: string): string {
  const punctuation = str.slice(-1);
  const sentence = str.slice(0, -1);
  return (
    sentence
      .split(" ")
      .reverse()
      .map((word) => word.split("").reverse().join(""))
      .join(" ") + punctuation
  );
}

// alternate solution
export function esreverAlt(str: String): String {
    return str.slice(0, -1).split('').reverse().join('') + str.slice(-1);
}