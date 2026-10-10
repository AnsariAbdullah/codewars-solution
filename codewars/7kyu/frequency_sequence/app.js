function freqSeq(str, sep) {
  let numberOfTimes = {}
  let result = [];  
  for(let i=0; i < str.length; i++){
    if(numberOfTimes[str[i]]){
      numberOfTimes[str[i]] += 1
    }else{
     numberOfTimes[str[i]] = 1
    }
  }
  for(let i=0; i < str.length; i++){
    result.push(numberOfTimes[str[i]])
  }
  return result.join(sep)
}