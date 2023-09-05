export function isNice(arr:number[]): boolean {
  if(arr.length){
    for(let i = 0; i < arr.length; i++){
    let n = arr[i]
      if (arr.indexOf(n-1)==-1 && arr.indexOf(n+1)==-1){return false}
    }
    return true
  }else{
    return false
  }
}
