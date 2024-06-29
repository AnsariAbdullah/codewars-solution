
export function tailSwap(arr: [string,string]): [string,string] {
  const one: string[] = arr[0].split(':');
  const two: string[] = arr[1].split(':');
  
  return [`${one[0]}:${two[1]}`, `${two[0]}:${one[1]}`];
}