function smallEnough(a, limit){
  let maxNum = Math.max(...a)
  return maxNum <= limit ? true : false
}

// alternate
function smallEnough(a, limit){
  return a.every(val => val <= limit)
}