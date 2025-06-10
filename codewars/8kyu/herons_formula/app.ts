export function heron(a: number, b: number, c: number): number {
  const s = (a+b+c) / 2;
  const sqRoot = s * (s-a) * (s-b) * (s-c)
  return Math.sqrt(sqRoot);
}