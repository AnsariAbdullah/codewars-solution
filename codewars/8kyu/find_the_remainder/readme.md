Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)

## Solution
Use rest to take the params as array. This will help to find min and max value. Use `Math.min` & `Math.max` along with spread operator to spread the array element and find the value. If the min value is '0' simply return `NaN` else return the answer of `max%min`

Note: The spread and rest are an overkill here and are not needed. Math.min and Math.max can simply be used but I just wanted to practice spread and rest.