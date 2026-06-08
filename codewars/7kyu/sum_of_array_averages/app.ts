export function sumAverage(arrays: number[][]): number {
  let total = 0;
  for (const arr of arrays) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    let average = sum / arr.length;
    total += average;
  }

  return total;
}
