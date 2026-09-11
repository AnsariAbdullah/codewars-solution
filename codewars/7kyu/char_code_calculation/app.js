function sum(arg){
 return arg.split('').reduce((accumulator, current) => {
  return accumulator + Number(current);
 }, 0);
}

function calc(x){
  let total1 = x.split('').map(char => char.charCodeAt(0)).join(''); 
  let total2 = total1.replaceAll("7", "1")
  return sum(total1) - sum(total2)
}