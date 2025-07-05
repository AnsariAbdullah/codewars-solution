export function isVow(a: number[]): (number | string)[]{
let newArr: (number | string)[] = [];
for(let i=0; i<a.length; i++){
  if(a[i] == 97 || a[i] ==  101 || a[i] ==  105 || a[i] ==  111 || a[i] ==  117){
    newArr.push(String.fromCharCode(a[i]))
  }else{
    newArr.push(a[i])
  }
}
return newArr;
}