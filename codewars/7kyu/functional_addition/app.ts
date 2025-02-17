export function add(n: number): (x: number) => number {
  return (x: number) => x + n;
}