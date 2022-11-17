function strCount(str, letter) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === letter) {
			count++;
		}
	}
	return count;
}

// alternate solution
function strCount(str, letter) {
	return str.split('').filter(item => item === letter).length;
}