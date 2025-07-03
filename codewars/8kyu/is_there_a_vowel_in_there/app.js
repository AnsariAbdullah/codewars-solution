function isVow(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] == 97 ||
      a[i] == 101 ||
      a[i] == 105 ||
      a[i] == 111 ||
      a[i] == 117
    ) {
      newArr.push(String.fromCharCode(a[i]));
    } else {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

// alternate solution
function isVow(a){
  for(let i=0, l = a.length; i<l; i++){
  let char = String.fromCharCode(a[i]);
  if('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  return a;
}