export function findAll(array: number[], n: number): number[]{
  let res:number[] = [];
  for(let i=0; i<array.length; i++){
    if(array[i]===n) res.push(i)
  }
  console.log(res);
  return res;
  
}