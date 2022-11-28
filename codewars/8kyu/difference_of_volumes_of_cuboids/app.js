function findDifference(a, b) {
	return Math.abs(a.reduce(
		(total, item) => total * item) - b.reduce((total, item) => total * item)
	)
}