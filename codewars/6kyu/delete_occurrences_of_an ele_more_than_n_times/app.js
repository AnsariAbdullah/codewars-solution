function deleteNth(arr, n) {
  let count = {};
  let result = [];
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] <= n) {
      result.push(num);
    }
  }

  return result;
}
