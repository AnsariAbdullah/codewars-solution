function largestPairSum(numbers) {
	let num = numbers.sort((a, b) => b - a)
	return num[0] + num[1]
}

// optimized
function largestPairSum (numbers) {
	numbers.sort((a, b) => b - a);
	return numbers[0] + numbers[1];
}
