function remove(string) {
	let text = string.replace(/!/g, '')
	return text + '!';
}
