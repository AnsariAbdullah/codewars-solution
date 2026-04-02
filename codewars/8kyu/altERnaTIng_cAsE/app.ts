export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((c) => {
      if (c == c.toUpperCase()) {
        return c.toLowerCase();
      } else {
        return c.toUpperCase();
      }
    })
    .join("");
}
