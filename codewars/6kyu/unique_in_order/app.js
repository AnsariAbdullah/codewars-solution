var uniqueInOrder = function (iterable) {
	let arr = [];
	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i + 1]) {
			arr.push(iterable[i])
		}
	}
	return arr
}

// Alternate solution
var uniqueInOrder=function(iterable){
  return [...iterable].filter((item, index) => item !== iterable[index+1])
}