export const findSquares = (num: number): string => {
	const a: number = (num - 1) / 2;
	const b: number = a + 1;
	return `${b * b}-${a * a}`;
};