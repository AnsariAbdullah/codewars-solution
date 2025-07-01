export function sumOfDifferencesAlt(arr: number[]): number {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => b - a);
  let result: number = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
}
// alternate solution
export function sumOfDifferences(arr: number[]): number {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
