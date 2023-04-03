function firstToLast(str, c) {
	if (str.search(c) !== -1) {
		fIndex = str.indexOf(c)
		lIndex = str.lastIndexOf(c)
		return lIndex - fIndex
	} else return -1
}