function mergeArrays(arr1, arr2) {
	if (arr1.length || arr2.length) {
		let mergedArr = [...arr1, ...arr2];
		let finalArr = [];
		mergedArr.sort(function (a, b) { return a - b });
		for (let i = 0; i <= mergedArr.length - 1; i++) {
			if (!finalArr.includes(mergedArr[i])) {
				finalArr.push(mergedArr[i])
			}
		}
		return finalArr
	} else {
		return []
	}
}

// Alternate solution
function mergeArrays(arr1, arr2) {
	return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b)
}