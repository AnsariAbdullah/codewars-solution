function stairsIn20(s) {
	let sum = 0
	for (let i = 0; i < s.length; i++) {
		sum += s[i].reduce((acc, value) => acc + value, 0)
	}
	return sum * 20
}
