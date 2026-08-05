function toAcronym(inp){
  let arr = inp.split(" ");
  let res = ''
  for(let i=0; i<arr.length; i++){
   res += arr[i].charAt(0)
  }
  return res.toUpperCase();
}
