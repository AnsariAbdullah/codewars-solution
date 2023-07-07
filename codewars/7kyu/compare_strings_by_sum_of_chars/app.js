function compare(str1, str2) {

	if (str1 === null || str1.toUpperCase() === "NULL" || str1.toUpperCase() === "NIL" || str1.toUpperCase() === "NONE") {
		str1 = "";
	}
	if (str2 === null || str2.toUpperCase() === "NULL" || str2.toUpperCase() === "NIL" || str2.toUpperCase() === "NONE") {
		str2 = "";
	}


	if (!str1.match(/^[A-Za-z]+$/)) {
		str1 = "";
	}
	if (!str2.match(/^[A-Za-z]+$/)) {
		str2 = "";
	}


	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();


	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < str1.length; i++) {
		sum1 += str1.charCodeAt(i);
	}
	for (let i = 0; i < str2.length; i++) {
		sum2 += str2.charCodeAt(i);
	}


	return sum1 === sum2;
}

