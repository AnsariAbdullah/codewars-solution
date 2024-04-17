function spinWords(string) {
	return string.split(' ').map(item => {
		return item.length >= 5 ? item.split('').reverse().join('') : item
	}).join(' ')
}

// alternate solution
function spinWords(string) {
	return string.replace(/\w{5,}/g, (w) => w.split('').reverse().join(''))
}