String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((c) => {
      if (c == c.toUpperCase()) {
        return c.toLowerCase();
      } else {
        return c.toUpperCase();
      }
    })
    .join("");
};

// alternate solution
String.prototype.toAlternatingCase = function () {
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toUpperCase()) {
      newStr += this[i].toLowerCase();
    } else {
      newStr += this[i].toUpperCase();
    }
  }
  return newStr;
};
