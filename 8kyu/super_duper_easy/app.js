function problem(x) {
	if (typeof x === 'string' || x instanceof String) {
		return "Error"
	} else {
		return (x * 50) + 6
	}
}