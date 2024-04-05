function spinWords(string){
  let str = '';
  const sentence = string.split(' ')
  for(let i=0; i<sentence.length; i++){
    if(sentence[i].length >= 5){
      str += ` ${sentence[i].split('').reverse().join('')}`
    }else{
      str += ` ${sentence[i]}`
    }
  }
  return str.trim();
}