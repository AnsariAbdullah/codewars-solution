function powersOfTwo(n) {
	let resultArray = []
	for (let i = 0; i <= n; i++) {
		resultArray.push(2 ** i)
	}
	return resultArray;
}
