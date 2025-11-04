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
