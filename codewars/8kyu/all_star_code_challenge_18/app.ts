export function strCount(str: string, letter: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// alternate solution
export function strCountAlt(str: string, letter: string): number {
  return str.split("").filter((item) => item === letter).length;
}
