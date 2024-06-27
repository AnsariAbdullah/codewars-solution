function tailSwap(arr) {
	const [firstBC, firstAC] = arr[0].split(":")
	const [secondBC, secondAC] = arr[1].split(":")

	return [`${firstBC}:${secondAC}`, `${secondBC}:${firstAC}`];
}