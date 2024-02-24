function consecutive(arr, a, b) {
  let indexofFirst = arr.indexOf(a);
  let indexofSecond = arr.indexOf(b);
  if(indexofSecond === indexofFirst + 1 || indexofFirst === indexofSecond + 1){
    return true
  }
  return false
}

