Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

## Solution
check if length is greater than 0 for the provided array. Run a `forEach()` or `map()` and get square using `Math.pow()`. Return sum.