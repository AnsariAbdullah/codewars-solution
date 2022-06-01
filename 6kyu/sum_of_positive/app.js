function positiveSum(arr) {
  let sum = 0;
  arr.forEach(item => {
    if(item > 0){
      sum += item
    }
  })
  return sum;
}