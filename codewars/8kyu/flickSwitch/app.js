function flickSwitch(arr){
  let resultArr = []
  let boolVal = true;
  arr.forEach(item => {
    if(item !== 'flick'){
      resultArr.push(boolVal)
    }else{
      boolVal = !boolVal;
      resultArr.push(boolVal)
    }
  })
  return resultArr
}