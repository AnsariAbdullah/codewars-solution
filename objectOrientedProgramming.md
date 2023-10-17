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

## Reusable code with `this` keyword
The last challenge introduced a method to the `duck` object. It used `duck.name` dot notation to access the value for the `name` property within the return statement:

```
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the `this` keyword:

```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` is a deep topic, and the above example is only one way to use it. In the current context, `this` refers to the object that the method is associated with: `duck`. If the object's name is changed to `mallard`, it is not necessary to find all the references to `duck` in the code. It makes the code reusable and easier to read.

## Constructor Function
*Constructors* are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

```
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a `Bird` object with properties `name`, `color`, and `numLegs` set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

<ul>
<li>Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.</li>
<li>Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.</li>
<li>Constructors define properties and behaviors instead of returning a value as other functions might.</li>
</ul>
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

## Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

```
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

Note that you have an immediately invoked function expression (IIFE) that returns an object `motionModule`. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
```
motionModule.glideMixin(duck);
duck.glide();
```