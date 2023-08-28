function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false
};

// alternate solution
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  let nameRegex = /^Santa Claus$/;
  let passwordRegex = /^Ho Ho Ho!$/;
  return nameRegex.test(name) && passwordRegex.test(password) ? true : false
};