function minMax(arr) {
	let minVal = Math.min(...arr)
	let maxVal = Math.max(...arr)
	return [minVal, maxVal]
}