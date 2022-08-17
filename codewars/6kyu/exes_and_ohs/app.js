function XO(str) {
  let xNumber = '';
  let oNumber = '';
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      xNumber += str[i];
      } else if (str[i].toLowerCase() === 'o') {
      oNumber += str[i];
      }
    }
    return xNumber.length === oNumber.length ;
}