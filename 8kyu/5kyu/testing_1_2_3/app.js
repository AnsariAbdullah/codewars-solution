var number = function (array) {
	resultArr = [];
	array.forEach((item, index) => {
		resultArr.push(`${index + 1}: ${item}`)
	})
	return resultArr
}