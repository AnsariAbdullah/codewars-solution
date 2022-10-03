function remainder(...args) {
	// Divide the larger argument by the smaller argument and return the remainder
	let max = Math.max(...args)
	let min = Math.min(...args)

	return min === 0 ? NaN : max % min
}