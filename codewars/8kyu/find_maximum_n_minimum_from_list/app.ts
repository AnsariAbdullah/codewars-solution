const min = (list: number[]): number => {
	return Math.min(...list);
}

const max = (list: number[]): number => {
	return Math.max(...list);
}

// alternate solution
const min = (list: number[]): number => {
	let arr = list.sort((a, b) => a - b);
	return arr[0];
}

const max = (list: number[]): number => {
	let arr = list.sort((a, b) => b - a);
	return arr[0];
}