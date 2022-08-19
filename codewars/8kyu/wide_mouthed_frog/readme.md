The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

## Solution
Use `toLowerCase()` to first convert the parameter so that it can work in case sesitive situation. Use ternary to return `small` if the parameter is alligator else return `wide`

## Alternate solution
User regex to match params ans return `small` if the parameter is alligator else return `wide`