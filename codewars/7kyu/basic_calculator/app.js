function calculate(a, operator, b) {
 switch (operator){
   case "+":
    return a+b
   case "-":
    return a-b
   case "/":
     return b===0 ? null : a/b
  case "*":
    return a*b
   default:
    return null;  
 }
}