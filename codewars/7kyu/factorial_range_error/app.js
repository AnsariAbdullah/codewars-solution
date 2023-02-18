function factorial(n){
  if(n<0 || n>12){
    throw new RangeError();
  }
  let res = 1
  while(n>0){
    res = res * n
    n-- 
  }
  return res;
}