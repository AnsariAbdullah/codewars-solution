function distinct(a) {
	return [...new Set(a)];
}

// Alternate solution
function distinct(a) {
	let arr = [];
	a.forEach(item => {
		if (!arr.includes(item)) {
			arr.push(item)
		}
	})
	return arr;
}