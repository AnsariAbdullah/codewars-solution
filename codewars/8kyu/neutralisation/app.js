function neutralise(s1, s2) {
  let neutralizedValue = "";
  let lgth = s1.length;
  for (let i = 0; i < lgth; i++) {
    let str1 = s1[i];
    let str2 = s2[i];
    if (str1 === "+" && str2 === "+") {
      neutralizedValue += "+";
    } else if (str1 === "-" && str2 === "-") {
      neutralizedValue += "-";
    } else {
      neutralizedValue += "0";
    }
  }

  return neutralizedValue;
}
