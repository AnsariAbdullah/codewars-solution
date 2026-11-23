function arrayMadness(a, b) {
  let aTotal = a.reduce((sum, num) => sum+num**2, 0)
  let bTotal = b.reduce((sum, num) => sum+num**3, 0);
  return aTotal > bTotal;
}