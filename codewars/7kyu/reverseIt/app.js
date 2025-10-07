function reverseIt(data) {
  if (typeof data == "string") {
    return data.split("").reverse().join("");
  }
  if (typeof data == "number") {
    return Number(data.toString().split("").reverse().join(""));
  }
  return data;
}

// alternate solution
function reverseIt(data){
  return typeof data === 'number' ? +[...`${data}`].reverse().join('') :
    typeof data === 'string' ? [...data].reverse().join('') : 
    data
}
