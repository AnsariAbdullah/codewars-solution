function getIndexToIns(arr, num) {
  arr.sort((a,b) => a-b)
  for(let i=0; i<arr.length; i++){
    if(arr[i]  >= num) return i
  }
  
  return arr.length;
}

getIndexToIns([40, 60], 50);


// alternate solution
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a -b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);