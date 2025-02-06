function threeInOne(arr){
  let result = [];
  let newArr = arr.slice();
  while(newArr.length > 0){
    let chunk = newArr.splice(0,3);
    let sum = chunk.reduce((acc, num) => acc+num, 0)
    result.push(sum)
  }
  return result;  
}
