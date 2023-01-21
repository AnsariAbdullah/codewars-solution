function isTriangular(t) {
  let sum = 0;
  let total = 0;
  for(let n=1; sum <= t; n++){
    sum += n
    if (sum==t) return true
  }
  return false
}
