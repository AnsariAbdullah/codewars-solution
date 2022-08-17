Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

## Solution
Convert string using `split()` and run a `forEach`. Check if the current item is uppercase using `toUpperCase()` then push the index of that item in a new array. Return the new array.