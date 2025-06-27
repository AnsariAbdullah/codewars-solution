export function unscrambleEggs(word: string): string {
  const output = word.replace(/egg/g, "");
  return output;
}
