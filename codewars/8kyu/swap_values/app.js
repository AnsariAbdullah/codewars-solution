function swapValues() {
  [arguments[0][0], arguments[0][1]] = [arguments[0][1], arguments[0][0]];
}


// alternate solution
function swapValues(arr) {
  return arr.reverse()
}