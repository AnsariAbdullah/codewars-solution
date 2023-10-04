function getLargerNumbers(a: number[], b: number[]): number[] {
  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length");
  }
  const result = a.map((num1, index) => Math.max(num1, b[index]));
  return result;
}