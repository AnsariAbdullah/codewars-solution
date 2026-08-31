function sum (a,b) {
  if(b!==undefined){
   return a+b;
  }
  return function(b){
   return a+b
  }
}