## Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
```
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
```

## Solution
Use regex to remove all exclamation and return the string with an exclamation at end.

## Alternate Solution
Use `split('1')` and `join('')` to remove all exclamation and return the string with an exclamation at end.