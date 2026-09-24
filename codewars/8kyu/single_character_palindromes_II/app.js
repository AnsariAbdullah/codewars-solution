function solve(str) {
  let counter = 0;
  for (let i = 0;i<Math.floor(str.length/2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      counter++;
    }
  }
  return counter === 1 || (str.length % 2 === 1 && counter === 0);
}