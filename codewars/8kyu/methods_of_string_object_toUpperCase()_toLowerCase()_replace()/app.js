function alienLanguage(str){
  return str.split(" ").map(item => item.slice(0, -1).toUpperCase() + item.slice(-1).toLowerCase()).join(' ')
}

// alternate solution
function alienLanguage(str){
  return str.toUpperCase().replace(/.\b/g, x=> x.toLowerCase())
}