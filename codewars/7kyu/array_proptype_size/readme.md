Implement Array.prototype.size(), which should simply return the length of the array. But do it entirely without using Array.prototype.length!
Where .length is a property, .size() is a method.

Rules
Because it is quite impossible to disable [].length, and because filtering for "length" is an iffy proposition at best,
THIS KATA WORKS ON THE HONOUR SYSTEM.
You may cheat. But you may have trouble sleeping. Or $DEITY may kill a puppy.

You need not support sparse arrays (but you may!). All testing will be done with dense arrays.
Values will not be undefined. You need only support actual, real arrays.

Your method needs to be read only. Arguments must be ignored. The this object must not be modified.

Be creative!

## Solution
Since the instruction clearly says not to use `length` property we can use a forEach which on each ititration is going to increase the count in the variable by 1 and in the end will return the variable.