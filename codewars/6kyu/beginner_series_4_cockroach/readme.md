The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
```
1.08 --> 30
```

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

## Solution
To convert a value from km per hour to cm per second multiply it by `27.778`. Use `Math.floor()` to round it and return it.