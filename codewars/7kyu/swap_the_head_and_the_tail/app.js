function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length/2)
  if(arr.length%2===0){
   const heads = arr.slice(0, mid);
   const tails = arr.slice(mid);  
   return [...tails, ...heads];
  }
  const heads = arr.slice(0, mid);
  const middle = arr[mid];
  const tails = arr.slice(mid+1);  
  return [...tails, middle, ...heads];
}