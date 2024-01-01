function solve(arr) {
  const lastOccurrence = {};
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      if (!(arr[i] in lastOccurrence)) {
          result.push(arr[i]);
          lastOccurrence[arr[i]] = i;
      }
  }
  return result.reverse();
}
