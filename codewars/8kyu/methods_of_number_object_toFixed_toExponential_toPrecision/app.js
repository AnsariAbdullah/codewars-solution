function howManySmaller(arr, n) {
	let newArr = arr.map(item => item.toFixed(2))
	return newArr.filter(item => item < n).length
}

// alternate solution
function howManySmaller(arr, n) {
	return arr.filter(x => +x.toFixed(2) < n).length;
}