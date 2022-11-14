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

## Find More Than the First Match
So far, you have only been able to extract or search a pattern once.
```
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);	// returns ["Repeat"]
```

To search or extract a pattern more than once, you can use the global search flag: `g`.
```
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);	// returns ["Repeat", "Repeat", "Repeat"]
```

Note
You can have multiple flags on your regex like `/search/gi`

## Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: `.`

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `hug`, `huh`, `hut`, and `hum`, you can use the regex `/hu./` to match all four words.

```
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);	// returns true
huRegex.test(hugStr);	// returns true
```

## Match Single Character with Multiple Possibilities
You learned how to match literal patterns (`/literal/`) and wildcard character (`/./`). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square brackets `[]` brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
```
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);	// returns ["big"]
bagStr.match(bgRegex);	// returns ["bag"]
bugStr.match(bgRegex);	// returns ["bug"]
bogStr.match(bgRegex);	// returns null
```
We can also use `test` instead of `match`

```
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/
bgRegex.test(bigStr)	// returns true
bgRegex.test(bagStr)	// returns true
bgRegex.test(bugStr)	// returns true
bgRegex.test(bogStr)	// returns false
```

## Range matching Numbers and Letters of the Alphabet
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters `a` through `e` you would use `[a-e]`.
```
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);	// returns ['cat']
batStr.match(bgRegex);	// returns ['bat']
matStr.match(bgRegex);	// returns null
```
We can also use `test` instead of `match`

```
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
bgRegex.test(catStr)	// returns true
bgRegex.test(batStr)	// returns true
bgRegex.test(matStr)	// returns false
```

Using the hyphen (`-`) to match a range of numbers is also possible. For example, `/[0-5]/` matches any number between `0` and `5`, including the `0` and `5`.

Also, it is possible to combine a range of letters and numbers in a single character set.
```
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```
## Negated character set
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.

For example,`/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `., !, [, @, /` and white space are matched - the negated vowel character set only excludes the vowel characters.

## Match Characters that Occur One or More Times
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the `+` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, `/a+/g` would find one match in `abc` and return `["a"]`. Because of the `+`, it would also find a single match in `aabc` and return `["aa"]`.

If it were instead checking the string `abab`, it would find two matches and return `["a", "a"]` because the a characters are not in a row - there is a `b` between them. Finally, since there is no `a` in the string `bcd`, it wouldn't find a match.

```
let riverStr = "Mississippi";
let myRegex = /s+/ig;
let result = riverStr.match(myRegex);	// returns ['ss', 'ss']
```

## Occur Zero or More Times
The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: `*`.

```
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);	// returns ["goooooooo"]
gPhrase.match(goRegex);		// returns ["g"]
oPhrase.match(goRegex);		// returns null
```
We can also use `test` instead of `match`

```
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
goRegex.test(soccerWord)	// returns true
goRegex.test(gPhrase)		// returns true
goRegex.test(oPhrase)		// returns false
```

## Lazy Matching vs Greedy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex `/t[a-z]*i/` to the string "titanic". This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between.

Regular expressions are by default greedy, so the match would return `["titani"]`. It finds the largest sub-string possible to fit the pattern.

However, you can use the `?` character to change it to lazy matching. `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

## Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);	// return true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);		// return false
```

## Match Ending String Patterns
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character `$` at the end of the regex.
```
let theEnding = "This is a never ending story";
let storyRegex = /story$/;	// return true
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);	// return false
```

## Match All Letters and Numbers
Using character classes, you were able to search for all letters of the alphabet with `[a-z]`. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

```
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);		// returns true
shortHand.test(numbers);	// returns true
longHand.test(varNames);	// returns true
shortHand.test(varNames);	// returns true
```

These shortcut character classes are also known as shorthand character classes.

## Match Everything But Letters and Numbers
You've learned that you can use a shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

```
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);	// returns ["%"]
sentence.match(shortHand);	// returns ["!"]
```