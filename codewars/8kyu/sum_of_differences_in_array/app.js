function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
}

// alternate solution
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
