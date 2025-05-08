export function monkeyCount(n: number) {
  let arr: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}

// alternate solution
export function monkeyCountAlt1(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1);
}
