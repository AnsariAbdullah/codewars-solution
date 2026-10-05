export function whowon(s: string): string {
  let newArrs = s.split("hit a reversal to");
  return newArrs[newArrs.length - 2].trim();
}
