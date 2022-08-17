An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

## Solution
Since anagram is case sensetive convert the string to lower case and split it. After spliting teh string into array sort and join it and comapare if both the strings are same. 