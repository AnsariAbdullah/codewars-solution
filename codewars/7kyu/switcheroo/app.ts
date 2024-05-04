export function switcheroo(x: string): string {
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

// alternate solution
export function switcherooAlt(x: string): string {
  return x.split('').map(item => {
    if(item === 'a'){
      return 'b';
    }
    if(item === 'b'){
      return 'a';
    }
    if(item === 'c'){
      return 'c';
    }
  }).join('');
}

// alternate solution
export function switcherooAlt2(x: string): string {
  return x.replace(/[ab]/g, x => x=='a'?'b':'a');
}

