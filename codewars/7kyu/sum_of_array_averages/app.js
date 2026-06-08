function sumAverage(arrays) {
  let total = 0;
  for (const arr of arrays) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    let average = sum / arr.length;
    total += average;
  }

  return total;
}

// alternate solution
Array.prototype.sum = function () {
  return this.reduce((curr, p) => curr + p);
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

function sumAverage(arrays) {
  return arrays.map((a) => a.average()).sum();
}
