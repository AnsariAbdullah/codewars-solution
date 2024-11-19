export function solve(s: string): number {
	return Math.max(...s.split(/[^aeiou]/i).map(i => i.length))
}

// alternate solution
export function solveAlt(s: string): number {
	let curr = 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		if ('aeiou'.includes(s[i])) {
			curr++
			if (curr > max) {
				max = curr
			}
		} else {
			curr = 0
		}
	}
	return max;
}