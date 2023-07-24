function between(a, b) {
	let list = [];
	for (let i = a; i <= b; i++) {
		list.push(i)
	}
	return list;
}

// alternate solution
function between(a, b) {
	let list = []
	while (a <= b) {
		list.push(a)
		a++
	}
	return list
}