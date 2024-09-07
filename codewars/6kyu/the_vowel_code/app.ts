// turn vowels into numbers
export function encode(string: string): string {
	const obj = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5
	}
	let newStr: string = ''
	for (let i = 0; i < string.length; i++) {
		if (string[i] == 'a') {
			newStr += obj.a
		} else if (string[i] == 'e') {
			newStr += obj.e
		} else if (string[i] == 'i') {
			newStr += obj.i
		} else if (string[i] == 'o') {
			newStr += obj.o
		} else if (string[i] == 'u') {
			newStr += obj.u
		} else {
			newStr += string[i]
		}
	}
	return newStr
}

// turn numbers back into vowels
export function decode(string: string): string {
	let newStr: string = ''
	for (let i = 0; i < string.length; i++) {
		if (string[i] == "1") {
			newStr += 'a'
		} else if (string[i] == "2") {
			newStr += 'e'
		} else if (string[i] == "3") {
			newStr += 'i'
		} else if (string[i] == "4") {
			newStr += 'o'
		} else if (string[i] == "5") {
			newStr += 'u'
		} else {
			newStr += string[i]
		}
	}
	return newStr
}