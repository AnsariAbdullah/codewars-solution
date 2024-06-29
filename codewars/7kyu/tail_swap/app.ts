export function tailSwap(arr: [string,string]): [string,string] {
  const [first, second] = arr;
  const [firstBC, firstAC] = first.split(":");
  const [secondBC, secondAC] = second.split(":");
  const newFirst = `${firstBC}:${secondAC}`
  const newSecond = `${secondBC}:${firstAC}`
  return [newFirst, newSecond];
}
