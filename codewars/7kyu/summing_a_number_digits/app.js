function sumDigits(number) {
	return [...`${Math.abs(number)}`].reduce((add, val) => +add + +val, 0)
}