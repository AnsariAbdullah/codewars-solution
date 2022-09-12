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

### Array.shift()
it Shifts(removes) the first element of the array:
e.g. const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
fruits = ["Orange", "Apple", "Mango"];

### parseInt()
parseInt() parses a number from string to number format. It takes two parameter one is the input that should be converted another one is the radix parameter which specifies the number system to be used.
Radix parameters are as follow:
2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

### Number()
The Number() method converts a value to a number. If the value cannot be converted, `NaN` is returned. For booleans, Number() returns 0 or 1. For dates, Number() returns milliseconds since January 1, 1970 00:00:00. For strings, Number() returns a number or `NaN`.
e.g. Number(true)		// will return 1
Number(false)		// will return 0
Number(new Date())		// will return 1662975130384
Number("999")		// will return 999