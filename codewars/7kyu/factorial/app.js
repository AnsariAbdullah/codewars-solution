function factorial(n) {
	let result = 1
	for (let i = n; i > 0; i--) {
		result *= i
	}
	return result;
}

// alternate solution
function factorial(n) {
	let result = 1
	while (n > 0) {
		result *= n
		n--
	}
	return result;
}