function findAverage(array) {
	if (!array.length) return 0;
	let total = array.reduce((acc, curr) => acc + curr, 0)
	return total / array.length
}