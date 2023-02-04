function removeSmallest(numbers) {
  if(!numbers.length){
    return [];
  }
  let newArr = [...numbers]
  let minNum = Math.min(...numbers)
  newArr.splice(newArr.indexOf(minNum), 1)
  return newArr
}