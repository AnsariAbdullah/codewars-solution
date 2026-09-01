function sum(a, b) {
  if (b !== undefined) {
    return a + b;
  }
  return function (b) {
    return a + b;
  };
}

// alternate solution
function sum (a,b) {
  if(arguments.length ===1){
   return function(b){
      return a+b
    }
  }
 return a+b
}