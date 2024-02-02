## Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.

### Solution
```
function sumAll(arr) {
  const arr2= arr.sort((a, b) => a-b);
  let sum = 0;
  for(let i=arr2[0]; i<=arr2[1] ;i++){
    sum += i
  }
  return sum;
}

sumAll([1, 4]);
```

## Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

### Solution
```
function diffArray(arr1, arr2) {
  const newArr = [];
  for(const item of arr1){
    if(arr2.indexOf(item) === -1){
      newArr.push(item)
    }
  }
  for(const item of arr2){
    if(arr1.indexOf(item) === -1){
      newArr.push(item)
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## Seek and Destroy
You will be provided with an initial array as the first argument to the `destroyer` function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the `arguments` object.

### Solution
```
function destroyer(arr, ...theArgs) {
  return arr.filter(item => !theArgs.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

### Solution
```
function whatIsInAName(collection, source) {
 return collection.filter(function(item) {
    for (let key in source) {
      if (item[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

## Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");
```

## Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.

- If a word begins with a vowel, just add `way` at the end.

```
function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0].toLowerCase())) {
    return str + 'way';
  } else {
    let firstVowelIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        firstVowelIndex = i;
        break;
      }
    }
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
  }
}

translatePigLatin("consonant");
```