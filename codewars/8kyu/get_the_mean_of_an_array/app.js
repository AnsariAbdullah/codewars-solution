function getAverage(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}