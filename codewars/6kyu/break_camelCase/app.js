function solution(string) {
  let str = '';
  for(let i=0; i<string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      str += ' '+string[i]
    }else{
      str += string[i]
    }
  }
  return str;
}
