function getNumberFromString(s) {
	const digitString = s.replace(/\D/g, '');

	return parseInt(digitString)
}

// alternate solution
function getNumberFromString(s) {
	let digitString = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] >= "0" && s[i] <= "9") {
			digitString += s[i];
		}
	}
	return parseInt(digitString);
}