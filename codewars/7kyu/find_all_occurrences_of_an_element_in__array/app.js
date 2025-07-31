function findAll(array, n) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) res.push(i);
  }
  return res;
}

// alternate solution
function findAll(array, n) {
  return array.reduce(
    (acc, curr, ind) => (curr === n ? [...acc, ind] : acc),
    []
  );
}
