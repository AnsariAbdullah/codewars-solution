var findAverage = function (nums) {
  let sum = nums.reduce((total, number) => total + number)
  return sum/nums.length;
}