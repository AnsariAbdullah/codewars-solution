export function capitalsFirst(input: string): string {
  const words = input.split(" ");
  const uppers: string[] = [];
  const lowers: string[] = [];

  for (const word of words) {
    if (/^[A-Z]/.test(word)) {
      uppers.push(word);
    } else if (/^[a-z]/.test(word)) {
      lowers.push(word);
    }
  }

  return [...uppers, ...lowers].join(" ");
}
