export class Kata {
	static disemvowel(str: string): string {
		return str.replace(/[aeiou]/gi, '');
	}
}

export class KataAlternate {
	static disemvowel(str: string): string {
		let vowels: string = 'aeiou'
		return str
			.split('')
			.filter(letter => !vowels.includes(letter.toLowerCase()))
			.join('');;
	}
}