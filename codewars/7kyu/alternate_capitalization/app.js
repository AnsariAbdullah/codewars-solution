function capitalize(s){
  const word = s.toLowerCase()
  let oddCaps='';
  let evenCaps='';
  for(let i=0; i<word.length; i++){
    if(i%2==0){
      oddCaps += word[i].toUpperCase()
      evenCaps += word[i]
    }else{
      oddCaps += word[i];
      evenCaps += word[i].toUpperCase()
    }
  }
  return [oddCaps, evenCaps];
};
