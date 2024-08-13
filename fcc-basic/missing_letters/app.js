function fearNotLetter(str) {
	const alphab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	const fIndex = alphab.indexOf(str.charAt(0));

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) !== alphab[fIndex + i]) {
			return alphab[fIndex + i];
		}
	}
	return undefined;
}

fearNotLetter("stvwx");