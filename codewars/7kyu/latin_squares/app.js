function makeLatinSquare(n) {
  let result = [];
  for(let i = 0; i<n; i++){
    let row = [];
    for(let j=i+1; j<=i+n; j++){
      nextNumber = j>n ? j-n : j;
      row.push(nextNumber);
    }
    result.push(row)
  }
  return result;
}