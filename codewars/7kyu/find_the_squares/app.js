const findSquares = num => {
  let a = (num - 1) / 2;  
  let b = a + 1;
  return `${b * b}-${a * a}`;
};