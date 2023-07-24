Complete the function that takes two integers (`a, b`, where `a < b`) and return an array of all integers between the input parameters, including them.

For example:
```
a = 1
b = 4
--> [1, 2, 3, 4]
```

## Solution
Run a for loop from intital value being the first paramenter till it matches the second parameter. On each itiration push it inside a new array. Return the new array.

## Alternate Solution
Run a while loop till the value of first paramenter is `<=` second parameter. On each itiration push it inside a new array and increment the value of a. Return the new array.