function getNumberFromString(s) {
  const digitString = s.replace(/\D/g, '');
  
  return parseInt(digitString)
}