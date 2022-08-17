function smallEnough(a, limit) {
	let maxValue = Math.max(...a)
	return maxValue <= limit
}