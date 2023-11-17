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