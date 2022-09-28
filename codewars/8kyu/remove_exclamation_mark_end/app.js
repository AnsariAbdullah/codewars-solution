function remove(string) {
	return string.replace(/!$/, '')
}

// Alternate solution
function remove(string) {
	str = string.split('')
	if (str[str.length - 1] == '!') {
		str.pop()
	}
	return str.join('');
}