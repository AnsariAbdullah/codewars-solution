function squareSum(numbers){
  let sum=0;
  if(numbers.length > 0){
    numbers.forEach(number => {
      let x = Math.pow(number, 2);
      sum +=x
    })
  }
  return sum;
}