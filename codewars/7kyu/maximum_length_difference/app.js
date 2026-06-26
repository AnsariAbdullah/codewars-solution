function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let maxDiff = 0;

  for (let str1 of a1) {
    for (let str2 of a2) {
      let diff = Math.abs(str1.length - str2.length);
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  return maxDiff;
}

// alternate solution

function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0){
    return -1
  }
  
  const length1 = a1.map(s => s.length)
  const length2 = a2.map(s => s.length)
  
  const max1 = Math.max(...length1)
  const min1 = Math.min(...length1)
  
  const max2 = Math.max(...length2)
  const min2 = Math.min(...length2)
  
  return Math.max(
    Math.abs( max1 - min2 ),
    Math.abs( max2 - min1 ),
  )
}