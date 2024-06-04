export function getSum(a: number, b: number): number {
	const small = a < b ? a : b;
	const bigger = a > b ? a : b;
	let result = 0;
	for (let i = small; i <= bigger; i++) {
		result += i
	}
	return result;
}

// alternate solution
function getSumAlt(a: number, b: number): number {
	let temp = 0;
	if (a < b) {
		while (a <= b) {
			temp += a++;
		}
	} else {
		while (a >= b) {
			temp += a--;
		}
	}
	return temp;
}
