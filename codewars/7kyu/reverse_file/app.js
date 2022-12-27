function reverseLetter(str) {
	let rgx = /[a-zA-Z]/g;
	return str.match(rgx).reverse().join('');
}
