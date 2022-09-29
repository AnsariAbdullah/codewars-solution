function accum(s) {
	let letter = s.split('');
	let word = []

	for (let i = 0; i < letter.length; i++) {
		word.push(letter[i].toUpperCase() + Array(i + 1).join(letter[i].toLowerCase()))
	}
	return word.join('-')
}

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}