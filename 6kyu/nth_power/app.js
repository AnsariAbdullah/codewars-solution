function index(array, n) {
	if (array[n] !== undefined) {
		let arrayItem = array[n];
		return Math.pow(arrayItem, n);
	} else {
		return -1
	}
}