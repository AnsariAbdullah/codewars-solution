String.prototype.isUpperCase = function () {
	return this.toString() === this.toUpperCase()
}

// alternate solution
String.prototype.isUpperCase = function () {
	return !/[a-z]/.test(this)
}