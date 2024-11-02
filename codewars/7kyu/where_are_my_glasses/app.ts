export function findGlasses(arr: string[]): number{
  const glassesRegex = /O-+O/
  for(let i=0; i<arr.length; i++){
    if(glassesRegex.test(arr[i])) return i
  }
  return -1
}

// optimized 
export function findGlassesAlt(arr: string[]): number{
  return arr.findIndex(i => /O-+O/.test(i))
}