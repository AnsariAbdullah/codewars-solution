We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

## Solution
Create a new array variable. Run a for loop from zero to number less than the passed parameter. Push the value of `i` on every itiration of loop in new array and return the new array.