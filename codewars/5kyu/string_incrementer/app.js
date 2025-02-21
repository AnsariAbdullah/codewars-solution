function incrementString(str) {
	const match = str.match(/(\d*)$/);
	if (match) {
		const numPart = match[0];
		const textPart = str.slice(0, -numPart.length);
		if (numPart === "") return str + "1";
		const newNum = (parseInt(numPart, 10) + 1).toString();
		return textPart + numPart.slice(0, -newNum.length) + newNum;
	}
	return str + "1";
}