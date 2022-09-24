Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

## Solution
Use `new Set` to get only unique value in the array. Return the destructures set.

## Alternate Solution
Create a new variable arr and assign an empty array to it. Iterate over the array using `forEach`. On every iteration check if arr includes the item. If it does not push the item else do nothing. Return the arr in the end.