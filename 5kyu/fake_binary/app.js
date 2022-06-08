function fakeBin(x) {
	let arr = []
	x.split('').forEach(item => {
		if (item < 5) {
			arr.push(0)
		} else {
			arr.push(1)
		}
	})
	return arr.join('')
}