export function shortLongShort(a:string, b:string) {
  return a.length < b.length ? a + b + a : b + a + b
}

// alternate solution
export function shortLongShortAlt(a:string, b:string) {
  let [short, long] = [a,b].sort((a, b) => a.length - b.length)
  return `${short}${long}${short}`;
}