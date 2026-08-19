function neutralise(s1, s2) {
  let neutralizedValue = "";
  for (let i = 0; i < s1.length; i++) {
    neutralizedValue += s1[i] === s2[i] ? s1[i] : "0";
  }
  return neutralizedValue;
}

// alternate solution
function neutralise(s1, s2) {
 return s1.split('').map((item, ind) => item === s2[ind] ? item : "0").join('');
}