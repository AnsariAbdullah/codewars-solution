export function findAll(array: number[], n: number): number[] {
  let res: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) res.push(i);
  }
  return res;
}


// alternate solution
export function findAllAlt(array: number[], n: number): number[] {
return array.reduce<number[]>((acc: number[], curr: number, ind: number) => curr === n ? [...acc, ind] : acc, [])
}