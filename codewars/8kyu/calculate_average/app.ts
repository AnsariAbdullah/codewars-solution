export function findAverage(array: number[]): number {
  if(array.length === 0) return 0  
  let total:number = array.reduce((acc, curr) => acc+curr, 0)
  return total/array.length
}