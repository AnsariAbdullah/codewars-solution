interface String {
	digit(): boolean;
}

String.prototype.digit = function (): boolean {
	return /^\d$/.test(this as string);
};

// alternate solution
String.prototype.digit = function (): boolean {
	return /^[0-9]$/.test(this as string);
};
