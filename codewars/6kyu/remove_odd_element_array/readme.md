Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

## Solution
Run a `map` or `forEach` on the basis of index push elements inside a new array. If index if even push values else don't do anything. Return the new array.