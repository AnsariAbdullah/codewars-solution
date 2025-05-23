function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}

// alternate solution
function monkeyCount(n) {
  return Array.from({ length: n }, (item, i) => i + 1);
}

// alternate solution
function monkeyCount(n) {
  return Array(n)
    .fill(0)
    .map((item, i) => i + 1);
}
