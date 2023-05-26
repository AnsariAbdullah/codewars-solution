## This readme file is a collection of all the things I learned during solving codewars Katas

- With time this file will be populated and edited.
- It might also have some code snippets for examples.
- Please add an index for easy navigation.



## Array
## array.map()
map() creates a new array from calling a function for every array element. It does not execute the function for empty elements. It does not change the original array.

## array.filter
The filter() method creates a new array filled with elements that pass a test provided by a function. This method does not execute the function for empty elements. The method does not change the original array.

## array.find
The find() method returns the value of the first element that passes a test. It method executes a function for each array element and returns undefined if no elements are found. It does not execute the function for empty elements. It does not change the original array.

### forEach
- Iterates over array and modifies new array

### slice()
- Returns selected elements in an array, as a new array. It selects from a given start, up to a (not inclusive) given end.

### splice()
- Method adds and/or removes array elements. It overwrites the original array

### Math.max
- Returns largest value given as input parameters.
```
Math.max(1, 2, 3)
// will return 3
```
- This will also work on arrays
```
Math.max(...array)
// will return largest value from array
```
### Math.min
- Returns smallest value given as input parameters. 
```
Math.min(1, 2, 3)
// will return 1
```
- This will also work on arrays
```
Math.min(...array)
// will return smallest value from array
```
### Math.floor
- Rounds down any floating-point integer passed in the argument.
```
Math.floor(5.95)
// will return 5
```
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
<!-- to add item -->
letters.add("d");
<!-- to delete/remove item -->
letters.delete(value)

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

## while loop
The while loop runs until the condition passed to it is true.
e.g. while( i < 10) {
	// this block of code will run until the value for i is less than 10 
}

## Array.prototype
You can add a new property to array using this.
Same goes with String, Boolean and Number
Boolean.prototype
Number.prototype
String.prototype

## JSON.stringify()
This convert a JavaScript object into a string with JSON.stringify(). A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.

## Boolean()
You can use the Boolean() function to find out if an expression (or a variable) is true. 
```Boolean(10 > 9) // true 
Boolean(10 < 9) // false
```


# String
## string.trim()
The trim() method removes whitespace from both sides of a string. It does not change the original string.

## toUpperCase()
The toUpperCase() method converts a string to uppercase letters. This method does not change the original string.

## toLowerCase()
The toLowerCase() method converts a string to lowercase letters. This method does not change the original string.
