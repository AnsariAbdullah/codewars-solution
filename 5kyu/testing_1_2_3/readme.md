Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

## Solution
Use `forEach`and iterate over array. In a new array push values using string interpolation `${index+1}: ${item}`

Alternate solution
Instead of using `forEach` use `map()` so you don't have to create a new array and return it as `map` is will perform action on the same array