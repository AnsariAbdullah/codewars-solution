function sumTwoSmallestNumbers(numbers) {
	num = numbers.sort((a, b) => a - b)
	return num[0] + num[1]
}
