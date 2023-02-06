function smallEnough(a, limit){
  let maxNum = Math.max(...a)
  return maxNum <= limit ? true : false
}

