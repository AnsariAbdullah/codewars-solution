export function isNice(arr) {
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


// Alternate solution
function isNice(arr){
  return arr.length > 0 ? arr.every(item => arr.includes(item-1) || arr.includes(item+1)) : false
}