You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

## Solution
Get the max value from array using `Math.max()`. Compare if the limit is greater than maximum value and return tru or false on the basis of that.