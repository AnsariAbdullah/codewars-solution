var replaceDots = function (str) {
	return str.replaceAll('.', '-');
}

// alternate solution
var replaceDots = function (str) {
	return str.replace(/\./g, '-');
}