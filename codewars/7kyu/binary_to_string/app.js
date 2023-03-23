function binaryToString(binary) {
	return String.fromCharCode(...binary.split(/(?=0b)/).map(Number));
}