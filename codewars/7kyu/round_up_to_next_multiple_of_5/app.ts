export function roundToNext5(n: number): number {
	if (n % 5 === 0) {
		return n;
	}
	if (n > 0) {
		return n + (5 - (n % 5));
	} else {
		return n - (n % 5);
	}
}

// alternate solution
export function roundToNext5Alt(n: number): number {
	return Math.ceil(n / 5) * 5;
}

// alternate solution
export function roundToNext5Alt2(n: number): number {
	while (n % 5 !== 0) n++;
	return n;
}
