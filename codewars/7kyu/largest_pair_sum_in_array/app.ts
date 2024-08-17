export function largestPairSum(numbers: number[]): number {
	numbers.sort((a, b) => b - a);
	return numbers[0] + numbers[1];
}