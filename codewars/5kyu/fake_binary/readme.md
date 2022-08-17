Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

## Solution
Use `split()` to split string in array. Iterate over the array push `0` into new array based on if the value is less than 5 and `1` if the value is greater than or equal than 5. `join()` and return value.