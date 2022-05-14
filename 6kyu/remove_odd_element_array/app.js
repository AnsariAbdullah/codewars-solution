function removeEveryOther(arr) {
	let newArr = [];
	arr.map((item, index) => {
		if (index % 2 == 0) {
			newArr.push(item)
		}
	})
	return newArr;
}