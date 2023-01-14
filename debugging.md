## Using Console to Check Values

The `console.log()` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's how to print the string `Hello world!` to the console:
```
console.log('Hello world!');
```
## Use typeof to Check the Type of a Variable
You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using `typeof`:
```
console.log(typeof "");		// returns strings
console.log(typeof 0);		// returns number
console.log(typeof []);		// returns object
console.log(typeof {});		// returns object
```

JavaScript recognizes seven primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` (new with ES6), and `BigInt` (new with ES2020), and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.
