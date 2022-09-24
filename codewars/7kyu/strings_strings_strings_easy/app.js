Array.prototype.toString = Boolean.prototype.toString = Number.prototype.toString = function () {
	return JSON.stringify(this)
}