export function solve(s:string): number{
  return Math.max(...s.split(/[^aeiou]/i).map(i => i.length))
}
