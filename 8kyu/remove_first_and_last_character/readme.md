It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

## Solution
Convert string into array using `.split()`. Use `.pop()` and `.shift()` to remove the first and last items in array. Convert the array back into string using `.join()`