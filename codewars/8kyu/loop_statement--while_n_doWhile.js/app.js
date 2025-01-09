function padIt(str,n){
  let res = str;
  let i = 0;
  while(i<n){
    if(i%2 ==0){
      res = `*${res}`;
    }else{
      res = `${res}*`;
    }
    i++
  }
  return res;
}
