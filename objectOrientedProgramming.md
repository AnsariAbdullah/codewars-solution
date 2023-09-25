## Basic JavaScript Object

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a `duck` object:

```
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

This `duck` object has two property/value pairs: a `name` of `Aflac` and a `numLegs` of 2.

## Access the Properties of an Object Using Dot Notation

Here's an example how to access the values of those properties.
```
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```
Dot notation is used on the object name, `duck`, followed by the name of the property, `name`, to access the value of `Aflac`.

## Create a Method on an Object

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the `duck` example with a method:
```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```
The example adds the `sayName` method, which is a function that returns a sentence giving the name of the `duck`. Notice that the method accessed the `name` property in the return statement using `duck.name`. The next challenge will cover another way to do this.

---////----

## Use Closure to Protect Properties Within an Object from Being Modified Externally
In the previous challenge, `bird` had a public property `name`. It is considered public because it can be accessed and changed outside of `bird`'s definition.
```
bird.name = "Duffy";
```
Therefore, any part of your code can easily change the name of `bird` to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```
Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created. This is called `closure`.

## Understand the Immediately Invoked Function Expression (IIFE)
A common pattern in JavaScript is to execute a function as soon as it is declared:
```
(function () {
  console.log("Chirp, chirp!");
})();
```
This is an anonymous function expression that executes right away, and outputs `Chirp, chirp!` immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

