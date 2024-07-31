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