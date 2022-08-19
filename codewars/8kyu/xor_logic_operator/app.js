function xor(a, b) {
	return a && !b ? true : !a && b ? true : false
}

// alternate solution
function xor(a, b) {
	return a != b;
}