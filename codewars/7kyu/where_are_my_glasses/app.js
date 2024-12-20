function findGlasses(arr) {
	const glassesRegex = /O-+O/
	for (let i = 0; i < arr.length; i++) {
		if (glassesRegex.test(arr[i])) return i
	}
	return -1
}

// alternate solution 
function findGlasses(arr) {
	return arr.findIndex(i => /O-+O/.test(i))
}