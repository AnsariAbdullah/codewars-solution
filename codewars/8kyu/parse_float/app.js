function parseF(s) {
  let number = parseFloat(s)
  return !isNaN(number) ? number : null;
}