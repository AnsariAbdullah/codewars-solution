export function unscrambleEggs(word: string): string {
  const output = word.replace(/egg/g, "");
  return output;
}

// optimised solution
export function unscrambleEggsAlt(word: string): string {
return word.replace(/egg/g, "");
}