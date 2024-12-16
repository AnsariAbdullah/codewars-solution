function moveTen(s) {
	const str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	const arr = s.split("").map(a => a = str.indexOf(a) + 10);
	return arr.map(v => v = str[v]).join("")
}

// alternate solution
function moveTen(s){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)])
}