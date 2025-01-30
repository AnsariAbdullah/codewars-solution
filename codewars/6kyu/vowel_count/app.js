function getCount(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count++
	}
	return count;
}

// alternate solution
function getCount(str) {
	return str.split('').filter(item => "aeiouAEIOU".includes(item)).length;
}

// alternate solution
function getCount(str) {
  let list = str.match(/[aeiou]/gi);
  return list ? list.length : 0;
}