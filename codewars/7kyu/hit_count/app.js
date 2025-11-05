function counterEffect(hitCount) {
  let result = [];
  for (let i = 0; i < hitCount.length; i++) {
    let tempArr = [];
    for (let j = 0; j <= hitCount[i]; j++) {
      tempArr.push(j);
    }
    result.push(tempArr);
  }
  return result;
}

// alternte solution
function counterEffect(hitCount) {
  let counter;
  counter = hitCount.split("").map((item) => {
    let newArr = [];
    for (let i = 0; i <= item; i++) {
      newArr.push(i);
    }
    return newArr;
  });
  return counter;
}
