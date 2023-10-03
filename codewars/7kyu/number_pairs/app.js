function getLargerNumbers(a, b) {
  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length");
  }
  const result = a.map((num1, index) => Math.max(num1, b[index]));

  return result;
}


// alternate solution
function getLargerNumbers(a, b) {
  let newArray= [];
  for(let i=0; i<a.length; i++){
    newArray.push(Math.max(a[i], b[i]))
  }
  return newArray;
}