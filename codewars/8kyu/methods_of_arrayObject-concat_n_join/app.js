function bigToSmall(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result = result.concat(arr[i])
	}
	return result.sort((a, b) => b - a).join('>')
}

// alternate solution
function bigToSmall(arr) {
	return [].concat(...arr).sort((a, b) => b - a).join('>');
}