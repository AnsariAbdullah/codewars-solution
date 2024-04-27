function vowelIndices(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	let result = []
	const words = word.toLowerCase();
	for (let i = 0; i < words.length; i++) {
		if (vowels.includes(words[i])) {
			result.push(i + 1)
		}
	}
	return result
}

// alternate solution
function vowelIndices(word) {
	let result = [];
	for (let i = 0; i < word.length; i++) {
		if (/[aeiouy]/i.test(word[i])) result.push(i + 1)
	}
	return result;
}