function getNumberFromString(s: string): number {
	const digitString: string = s.replace(/\D/g, '');

	return parseInt(digitString);
}

// alternate solution
function getNumberFromString(s: string): number {
	let digitString: string = "";

	for (let i: number = 0; i < s.length; i++) {
		if (s[i] >= "0" && s[i] <= "9") {
			digitString += s[i];
		}
	}
	return parseInt(digitString);
}