function moveTen(s) {
	const str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	const arr = s.split("").map(a => a = str.indexOf(a) + 10);
	return arr.map(v => v = str[v]).join("")
}
