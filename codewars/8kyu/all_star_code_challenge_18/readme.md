Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

```
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
```

Notes:
The first argument can be an empty string
The second string argument will always be of length 1

## Solution
Create a variable to count the occurance of letter. Run a for loop on the string and add one to the count if the alphabet `===` to the letter.

## Alternate solution
Split the string into array. Run `filter()` to filter word only similar to letter and get the length of it.