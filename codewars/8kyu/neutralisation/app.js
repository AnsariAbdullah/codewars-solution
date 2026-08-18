function neutralise(s1, s2) {
  let neutralizedValue = "";
  for (let i = 0; i < s1.length; i++) {
    neutralizedValue += s1[i] === s2[i] ? s1[i] : "0";
  }
  return neutralizedValue;
}
