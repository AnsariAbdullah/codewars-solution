export function towerBuilder(floors: number): string[] {
	let space: string, star: string, tower: string[] = [];
	for (let i = 1; i <= floors; i++) {
		space = " ".repeat(floors - i);
		star = "*".repeat((2 * i) - 1);
		tower.push(`${space}${star}${space}`);
	}
	return tower;
}