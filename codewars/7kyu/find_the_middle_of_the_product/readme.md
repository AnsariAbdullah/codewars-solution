Given a string of characters, create a function returning the middle digit in the product of each digit in the string. If the *product has an even number of digits*, return the middle two digits.

You must return an integer, not a string, so if the product is e.g. `2016`, return `1`, not `'01'`.

Not all strings will contain digits and not all inputs will be string. In those cases, return `-1`.

Examples:

```
's7d8jd9' -> 7, 8, 9 -> 7 * 8 * 9 = 504 --> 0

'8888' -> 8, 8, 8, 8, -> 8 * 8 * 8 * 8 = 4096 --> 09 --> 9

'abc' --> -1
```