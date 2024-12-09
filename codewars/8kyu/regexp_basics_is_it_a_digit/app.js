String.prototype.digit = function () {
	return /^[0-9]$/.test(this);
};

// alternate solution
String.prototype.digit = function () {
	return /^\d$/.test(this);
};