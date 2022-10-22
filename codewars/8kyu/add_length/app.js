function addLength(str) {
	strArr = str.split(' ')
	let arr = []
	for (let i = 0; i < strArr.length; i++) {
		arr.push(`${strArr[i]} ${strArr[i].length}`)
	}
	return arr
}
