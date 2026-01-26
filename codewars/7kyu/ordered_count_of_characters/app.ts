export function orderedCount(text: string): [string, number][] {
  const map = new Map();

  for (const char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return Array.from(map.entries());
}