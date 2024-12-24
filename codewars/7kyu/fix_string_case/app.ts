export function solve(s: string): string {

	let lowerCaseChars: number = 0;
	let upperCaseChars: number = 0;

	for (let char of s) {
		if (char === char.toUpperCase()) {
			upperCaseChars++
		} else {
			lowerCaseChars++
		}
	}

	if (lowerCaseChars >= upperCaseChars) {
		return s.toLowerCase();
	} else {
		return s.toUpperCase();
	}
}