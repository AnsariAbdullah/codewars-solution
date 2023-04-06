function alienLanguage(str){
  return str.split(' ').map(v=>v.slice(0,-1).toUpperCase() +v.slice(-1).toLowerCase()).join(' ');
}