## Regex
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
If you want to find the word `the` in the string `The dog chased the cat`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

### test()

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// The test method here returns true.
```

Any other forms of `Code` will not match. For example, the regex `/Code/` will not match `code` or `CODE`.
```
let testStr = "freeCodeCamp";
let wrongRegex = /code/;
wrongRegex.test(testStr);
// This test call will return false.
```

## Match a Literal String with Different Possibilities
Using regexes like `/coding/`, you can look for the pattern `coding` in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the `alternation` or `OR` operator: `|`.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is `/yes|no/`.

You can also search for more than just two patterns. You can do this by adding more patterns with more `OR` operators separating them, like `/yes|no|maybe/`.

```
let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/;
let result = petRegex.test(petString);
```

## Ignore Case While Matching
You've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the `i` flag. You can use it by appending it to the regex. An example of using this flag is `/ignorecase/i`. This regex can match the strings `ignorecase`, `igNoreCase`, and `IgnoreCase`.

```
let myString = "IgnoreCase";
let fccRegex = /ignorecase/i; // Change this line
let result = fccRegex.test(myString);
```

## Extract Matches
So far, we have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the `.match()` method.

To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses.
```
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```
Here the first `match` would return `["Hello"]` and the second would return `["expressions"]`.

Note that the `.match` syntax is the "opposite" of the `.test` method you have been using thus far:

```
'string'.match(/regex/);
/regex/.test('string');
```

## test() vs match()
`regexObject.test( String )`
Executes the search for a match between a regular expression and a specified string. Returns true or false.

`string.match( RegExp )`
Used to retrieve the matches when matching a string against a regular expression. Returns an array with the matches or null if there are none.