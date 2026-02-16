export function closeCompare(a: number, b:number, margin: number = 0): number{
  if (Math.abs(a - b) <= margin) return 0;
  return a < b ? -1 : 1;
}