export const remainder = (dividend: number, divisor: number): number =>
  dividend - Math.floor(dividend / divisor) * divisor;

// aleternate solution
export const remainderAlt = (D: number, d: number): number => {
  while (D >= d) {
    D -= d;
  }
  return D;
};
