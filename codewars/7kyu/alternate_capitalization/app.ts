export function capitalize(s: string): [string, string] {
	const word: string = s.toLowerCase();
	let oddCaps: string = '';
	let evenCaps: string = '';
	for (let i: number = 0; i < word.length; i++) {
		if (i % 2 == 0) {
			oddCaps += word[i].toUpperCase();
			evenCaps += word[i];
		} else {
			oddCaps += word[i];
			evenCaps += word[i].toUpperCase();
		}
	}
	return [oddCaps, evenCaps];
}

// alternate solution
function capitalize(s: string): [string, string] {
	let odd: string = s.split('').map((l, i) => i % 2 == 0 ? l.toUpperCase() : l).join('');
	let even: string = s.split('').map((l, i) => i % 2 == 0 ? l : l.toUpperCase()).join('');
	return [odd, even];
}