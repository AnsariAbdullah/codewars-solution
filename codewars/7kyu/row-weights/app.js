function rowWeights(array) {
	let odd = 0;
	let even = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 == 0) {
			odd += array[i]
		} else {
			even += array[i]
		}
	}
	return [odd, even]
}