Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

## Solution
Use regex to replace non-numerical chars with `''`. Return the output as number.

## Alternate Solution
Run a for loop on the string and on each ititration check if the item is a number using regex.