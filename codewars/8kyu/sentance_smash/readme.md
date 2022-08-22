Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

## Solution
Use `join()`

## Alternate solution
Run for loop through the array. Add each word of the array in a variable with space. Remove before and after spaces using `trim()` just incase it has spaces.