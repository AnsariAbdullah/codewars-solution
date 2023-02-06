## No Loops Allowed

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.

## Solution
Use `Math.max` to find out the maximum value. Use ternary and find out if the maximum valus is greater than limit return `false` else return `true`

## Alternate solution
use `.every()` to find if all the values are less than or equal to limit.