function getSum(a, b) {
	const small = a < b ? a : b;
	const bigger = a > b ? a : b;
	let result = 0;
	for (let i = small; i <= bigger; i++) {
		result += i
	}
	return result;
}
