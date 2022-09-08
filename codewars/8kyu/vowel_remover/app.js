function shortcut(string) {
	return string.replace(/a|e|i|o|u/g, '');
}

// alternate solution
function shortcut(string) {
	return string.split(/[aeiou]/g).join('')
}