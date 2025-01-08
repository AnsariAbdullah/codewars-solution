function whatNumberIsIt(n) {
	let type = '';
	if (n == Infinity) type = "Number.POSITIVE_INFINITY";
	else if (n == -Infinity) type = "Number.NEGATIVE_INFINITY";
	else if (n == 5e-324) type = "Number.MIN_VALUE";
	else if (n == 1.7976931348623157e+308) type = "Number.MAX_VALUE";
	else if (isNaN(n)) type = "Number.NaN";
	else type = n;
	return `Input number is ${type}`;
}

// alternate solution
function whatNumberIsIt(n) {
	let type = '';
	switch (n) {
		case Number.MAX_VALUE:
			type = "Number.MAX_VALUE";
			break;
		case Number.MIN_VALUE:
			type = "Number.MIN_VALUE";
			break;
		case Number.POSITIVE_INFINITY:
			type = "Number.POSITIVE_INFINITY";
			break;
		case Number.NEGATIVE_INFINITY:
			type = "Number.NEGATIVE_INFINITY";
			break;
		case Number(n):
			type = n;
			break;
		default:
			type = "Number.NaN";
	}
	return `Input number is ${type}`;
}
