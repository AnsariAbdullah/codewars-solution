function sumTwoSmallestNumbers(numbers) {
	numbers.sort((a, b) => a - b)
	smallestNum = numbers[0]
	secondSmallestNum = numbers[1]
	return smallestNum + secondSmallestNum
}
