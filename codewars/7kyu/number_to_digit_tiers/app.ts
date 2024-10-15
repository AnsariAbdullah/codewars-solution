export function createArrayOfTiers(num: number): string[] {
	let result: string[] = [];
	const numStr: string = num.toString();

	for (let i = 1; i <= numStr.length; i++) {
		result.push(numStr.slice(0, i));
	}

	return result;
}