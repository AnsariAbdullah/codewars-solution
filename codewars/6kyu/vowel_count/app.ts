export class Kata {
	static getCount(str: string): number {
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count++
		}
		return count;
	}
}

// alternate solution
export class Kata2 {
	static getCount(str: string): number {
		return str.split('').filter(item => 'aeiouAEIOU'.includes(item)).length;
	}
}

// alternate solution
export class Kata3 {
	static getCount(str: string): number {
		let list = str.match(/[aeiou]/gi);
		return list ? list.length : 0;
	}
}