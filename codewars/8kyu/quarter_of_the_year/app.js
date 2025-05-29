const quarterOf = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};

// alternate solution
const quarterOf = (month) => {
  return Math.ceil(month/3)
}