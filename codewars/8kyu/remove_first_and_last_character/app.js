function removeChar(str) {
	let arr = str.split('');
	arr.pop();
	arr.shift()
	return arr.join('')
};

// Alternate
function removeChar(str) {
	return str.slice(1, -1);
}