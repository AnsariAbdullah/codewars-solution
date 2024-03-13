function all( arr, fun ){
  return arr.every(item => fun(item))
}