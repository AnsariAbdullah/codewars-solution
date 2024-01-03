export function solve(arr: number[]): number[] {
  const lastOccurrence: { [key: number]: number } = {};
  const result: number[] = [];
  for (let i: number = arr.length - 1; i >= 0; i--) {
      if (!(arr[i] in lastOccurrence)) {
          result.push(arr[i]);
          lastOccurrence[arr[i]] = i;
      }
  }
  return result.reverse();
}