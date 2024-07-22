function openOrSenior(data){
  let result = []
  for(let i=0; i<data.length; i++){
    const [age, handStatus] = data[i]
    if(age > 54 && handStatus > 7){
      result.push("Senior")
    }else{
      result.push("Open")
    }
  }
  return result;
}
