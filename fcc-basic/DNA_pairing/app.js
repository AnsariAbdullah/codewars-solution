function pairElement(str) {
  let arr = []
  for(let i=0; i<str.length; i++){
    if(str[i] == "G" || str[i] == "C"){
      if(str[i] == "G"){
        arr.push(["G", "C"])
      }else{
        arr.push(["C", "G"])
      }
    }else{
      if(str[i] == "A"){
        arr.push(["A", "T"])
      }else{
        arr.push(["T", "A"])
      }
    }
  }
  return arr;
}

pairElement("GCG");