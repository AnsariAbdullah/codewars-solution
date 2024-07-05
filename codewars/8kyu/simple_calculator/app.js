function calculator(a,b,sign){
  if (Number.isInteger(a+b)) {
    if(sign === "+"){
      return a+b
    }else if(sign === "-"){
      return a-b
    }else if(sign === "/"){
      return a/b
    }else if(sign === "*"){
      return a*b
    }else{
      return "unknown value"
    }
  }else{
    return "unknown value"
  }

}