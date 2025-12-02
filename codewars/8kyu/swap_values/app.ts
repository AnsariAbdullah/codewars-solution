export function swapValues() {
  [arguments[0][0], arguments[0][1]] = [arguments[0][1], arguments[0][0]];
}


// alternate solution
export function altSwapValues(arr: number[]): number[] {
  return arr.reverse()
}