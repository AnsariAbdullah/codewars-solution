export function largestPairSum(numbers: number[]): number {
	let num = numbers.sort((a, b) => b - a)
	return num[0] + num[1]
}