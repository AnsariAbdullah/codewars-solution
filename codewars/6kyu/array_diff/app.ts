export function arrayDiff(a: number[], b: number[]): number[] {
	return a.filter(item => !b.includes(item));
}

// alternate solution
export function altArrayDiff(a: number[], b: number[]): number[] {
	let newArr: number[] = []
	for (let i = 0; i < a.length; i++) {
		if (!b.includes(a[i])) {
			newArr.push(a[i])
		}
	}
	return newArr;
}
