Write function `parseFloat` which takes an input and returns a number or `Nothing` if conversion is not possible.

## Solution
Convert the string passed as parameter using `parseFloat`. Use `isNaN()` to check if it is a number. Return the number if true else return `null`