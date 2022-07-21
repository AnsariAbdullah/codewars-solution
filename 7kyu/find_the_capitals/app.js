var capitals = function (word) {
	let arr = [];
	word.split('').forEach((item, index) => {
		if (item == item.toUpperCase()) {
			arr.push(index)
		}
	})
	return arr;
};