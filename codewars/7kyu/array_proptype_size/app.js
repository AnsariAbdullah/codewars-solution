Array.prototype.size = function () {
	let i = 0;
	this.forEach(x => i++);
	return i
};