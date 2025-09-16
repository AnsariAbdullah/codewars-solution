export function deleteNth(arr: number[],n: number): number[]{
  let count: {[key:number] : number} = {}
  let result: number[] = []
  for(const num of arr){
    count[num] = (count[num] || 0) + 1;
    if(count[num] <= n){
      result.push(num)
    }
  }
  
  return result;
}