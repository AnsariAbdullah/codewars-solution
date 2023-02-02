function howManySmaller(arr,n){
  let newArr = arr.map(item => item.toFixed(2))
  return newArr.filter(item => item < n).length
}

