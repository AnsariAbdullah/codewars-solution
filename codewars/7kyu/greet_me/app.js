var greet = function(name) {
  let nameString = name.toLowerCase()
  return `Hello ${nameString.charAt(0).toUpperCase() + nameString.slice(1)}!` 
};