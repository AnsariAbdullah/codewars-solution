export function rakeGarden(garden: string): string {
	let word = garden.split(' ')
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== 'rock' && word[i] !== 'gravel') {
			word[i] = 'gravel'
		}
	}
	return word.join(' ')
}

// alternate solution
export function rakeGarden2(garden: string): string {
	return garden.split(' ').map(item => item === 'rock' ? 'rock' : 'gravel').join(' ')
}