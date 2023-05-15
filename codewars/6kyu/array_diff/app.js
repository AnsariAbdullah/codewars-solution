function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item)) 
}

// alternate 
function arrayDiff(a, b) {
  let newArr = []
  for(let i=0; i<a.length; i++){
    if(!b.includes(a[i])){
      newArr.push(a[i])
    }
  }
  return newArr;
}