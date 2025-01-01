export function bigToSmall(arr: number[][]): string {
	let result: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		result = result.concat(arr[i])
	}

	return result.sort((a, b) => b - a).join('>');
}