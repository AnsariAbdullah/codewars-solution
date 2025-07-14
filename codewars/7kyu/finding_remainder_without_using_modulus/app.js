const remainder = (dividend, divisor) =>
  dividend - Math.floor(dividend / divisor) * divisor;

// aleternate solution
const remainderAlt = (D, d) => {
  while (D >= d) {
    D -= d;
  }
  return D;
};
