export function splitAdd(x: bigint, y: bigint): bigint {
  return x + (y * x * (x - 1n)) / 2n;
}
