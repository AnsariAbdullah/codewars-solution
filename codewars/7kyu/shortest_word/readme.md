Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

## Solution
Split word into array and itirate through it. On each itiration push length of the item into another array. Use `Math.min()` to return the smallest item from the array.