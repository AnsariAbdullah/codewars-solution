## Task
Given a string `str`, reverse it and omit all non-alphabetic characters.

### Example
For `str = "krishan"`, the output should be `"nahsirk"`.

For `str = "ultr53o?n"`, the output should be `"nortlu"`.

Input/Output
- `[input]` string `str`
A string consists of lowercase latin letters, digits and symbols.

- `[output]` a string

## Solution
Use regex `/[A-Za-z]/g` with `.match()` to remove all non-alphabets and put the result in an array. Return `reverse()` and `join()` output.
