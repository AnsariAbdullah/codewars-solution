Complete the solution so that the function will break up camel casing, using a space between words.

Example
```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## Solution
Run a loop on strings and check if the character is upper case. If it is add space and add the character in variable else add the character directly.
