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
