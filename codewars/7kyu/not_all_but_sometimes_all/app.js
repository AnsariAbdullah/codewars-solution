function remove(str, what) {
  let res = ''
  for(let i=0; i<str.length; i++){
    if(Object.hasOwn(what, str[i]) && what[str[i]] > 0){
      what[str[i]]--
    }else{
      res+= str[i]
    }
  }
  return res;
}
