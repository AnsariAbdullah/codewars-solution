export function between(a: number, b: number): number[] {
	let sol: number[] = []
	for (let i = a; i <= b; i++) {
		sol.push(i)
	}
	return sol;
}

// alternate solution
export function between2(a: number, b: number): number[] {
	let list: number[] = []
	while (a <= b) {
		list.push(a);
		a++
	}
	return list;
}