function findLongest(array) {
  let res = array[0].toString();
  for (let i = 1; i < array.length; i++) {
    let curr = array[i].toString();
    if (curr.length > res.length) res = curr;
  }
  return Number(res);
}
