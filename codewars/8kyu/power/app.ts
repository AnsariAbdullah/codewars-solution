export function numberToPower(number: number, power: number): number {
	if (power === 0) return 1
	let result = 1;
	for (let i = 0; i < power; i++) {
		result *= number
	}
	return result
}