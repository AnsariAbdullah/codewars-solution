function compare(str1, str2) {

	let sum1 = 0;
	let sum2 = 0;

	if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
	if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';

	s1.toUpperCase().split('').map((item) => sum1 += item.charCodeAt(0));
	s2.toUpperCase().split('').map((item) => sum2 += item.charCodeAt(0));

	return sum1 === sum2;
}