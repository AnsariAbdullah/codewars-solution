function smash(words) {
	return words.join(' ')
};

// alternate solution
function smash(words) {
	if (words.length) {
		let sentence = '';
		for (let i = 0; i <= words.length - 1; i++) {
			sentence += words[i] + ' '
		}
		return sentence.trim()
	}
	return ''
};
