export function toAcronym(inp: string): string {
  let arr = inp.split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i].charAt(0);
  }
  return res.toUpperCase();
}

// alternate solution
export function toAcronymAlt(inp: string): string {
  return inp
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");
}
