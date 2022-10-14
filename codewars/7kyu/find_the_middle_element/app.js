function gimme(triplet) {
	let arr = [...triplet].sort((a, b) => a - b)
	return triplet.indexOf(arr[1])
}