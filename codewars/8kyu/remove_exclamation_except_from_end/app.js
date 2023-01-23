function remove(string) {
	let text = string.replace(/!/g, '')
	return text + '!';
}

// alternate solution
function remove(string) {
	return string.split('!').join('') + '!'
}