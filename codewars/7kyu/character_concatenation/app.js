function charConcat(string) {
	let result = "";
	let length = string.length;
	let half = Math.floor(length / 2);

	for (let i = 0; i < half; i++) {
		result += string[i] + string[length - 1 - i] + (i + 1);
	}

	return result;
}