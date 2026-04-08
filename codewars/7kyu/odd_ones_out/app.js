function oddOnesOut(nums) {
  let counts = {};
  for (item of nums) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return nums.filter((num) => counts[num] % 2 === 0);
}
