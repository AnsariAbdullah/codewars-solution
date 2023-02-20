## Count by X

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

## Solution
Create an empty array to hold the results. Run a `for` loop from 1 till the second parameter. On each itiration multiply the `i` with the first parameter and push it in the array. Return the array.