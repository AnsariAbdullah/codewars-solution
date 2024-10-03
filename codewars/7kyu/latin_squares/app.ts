function makeLatinSquare(n: number): number[][] {
	let result: number[][] = [];
	for (let i = 0; i < n; i++) {
		let row: number[] = [];
		for (let j = i + 1; j <= i + n; j++) {
			let nextNumber = j > n ? j - n : j;
			row.push(nextNumber);
		}
		result.push(row);
	}
	return result;
}
