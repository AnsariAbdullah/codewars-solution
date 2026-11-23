function arrayMadness(a, b) {
  let aTotal = 0;
  let bTotal = 0;
  for(let i=0; i<a.length; i++){
    aTotal += a[i] ** 2;
  }
  for(let i=0; i<b.length; i++){
    bTotal += b[i] ** 3;
  }
  return aTotal > bTotal;
}