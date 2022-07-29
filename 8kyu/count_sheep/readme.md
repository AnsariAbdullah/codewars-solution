If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

## Solution
Run a loop from 1 till the passed param and on each iteration add `${i} sheep...` to string variable. Return the variable.