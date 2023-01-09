function noOdds(values) {
	return values.filter(num => num % 2 === 0)
}

// Alternate solution
function noOdds(values) {
	let arr = []
	values.map(item => item % 2 == 0 ? arr.push(item) : null)
	return arr
}