## This readme file is a collection of all the things I learned during solving codewars Katas

- With time this file will be populated and edited.
- It might also have some code snippets for examples


### forEach
- Iterates over array and modifies new array

### map
- Iterates over array and modifies the same array

### slice()
- Returns selected elements in an array, as a new array. It selects from a given start, up to a (not inclusive) given end.

### splice()
- Method adds and/or removes array elements. It overwrites the original array

### Math.max
- Returns largest value given as input parameters. 
eg. Math.max(1, 2, 3) // will return 3
- This will also work on arrays
eg. Math.max(...array) // will return largest value from array

### Math.min
- Returns smallest value given as input parameters. 
eg. Math.min(1, 2, 3) // will return 1
- This will also work on arrays
eg. Math.min(...array) // will return smallest value from array

### Math.floor
- Rounds down any floating-point integer passed in the argument.
e.g. Math.floor(5.95) // will return 5

### Math.round
- Rounds the number to the nearest integer.
e.g. Math.round(0.9); // will return: 1

### Math.trunc
- Returns the integer part of a number by removing any fractional/decimal digits.
e.g. Math.trunc(13.37) // will return: 13


### Escaping literal quote
Placing a backslash (\) in front of the quote will help to escape literal quote

### Escape sequence in Strings
Escape char | For
--- | --- 
`\'` | single quote
`\"` | double quote
`\\` | backslash
`\n` | newline
`\r` | carriage return
`\t` | tab
`\b` | word boundary
`\f` | form feed

### Sets
Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type. You can create a JavaScript Set by passing an Array to `new Set()`. And use and use `add()` to add values and variables.

eg. const letters = new Set(["a","b","c"]);
letters.add("d");

### Replace
Replace is used to replace string with another string.
e.g. p.replace('dog', 'monkey')

### Array.from
Array.from returns an array from any iterable object like string.
e.g. Array.from("ABCDEFG") // will return ['A', 'B', 'C', 'D', 'E', 'F', 'G']