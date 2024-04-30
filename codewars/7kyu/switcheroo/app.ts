function switcheroo(x: string): string {
  let str = '';
  for(let i=0; i<x.length; i++){
    if(x[i] === 'a' || x[i] === 'b'){
      str += x[i] === 'a' ? 'b' : 'a';
    }else{
      str += x[i];
    }
  }
  return str;
}