export function parseF(s:string): number|null {
  let number = parseFloat(s);
  return !isNaN(number) ? number : null;
}