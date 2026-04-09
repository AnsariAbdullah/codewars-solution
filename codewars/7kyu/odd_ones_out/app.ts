export function oddOnesOut(nums: number[]) {
  let counts: Record<number, number> = {};
  for (const ele of nums) {
    counts[ele] = (counts[ele] || 0) + 1;
  }
  return nums.filter((num) => counts[num] % 2 === 0);
}
