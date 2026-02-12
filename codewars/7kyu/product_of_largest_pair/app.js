function maxProduct(a) {
  let biggest = 0;
  let secondBiggest = 0;
  for (const num of a) {
    if (num > biggest) {
      secondBiggest = biggest;
      biggest = num;
    } else if (num > secondBiggest) {
      secondBiggest = num;
    }
  }
  return biggest * secondBiggest;
}
