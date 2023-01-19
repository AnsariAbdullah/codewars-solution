function stairsIn20(s) {
	let sun = s[0].reduce((acc, value) => acc + value, 0);
	let mon = s[1].reduce((acc, value) => acc + value, 0);
	let tues = s[2].reduce((acc, value) => acc + value, 0);
	let wed = s[3].reduce((acc, value) => acc + value, 0);
	let thurs = s[4].reduce((acc, value) => acc + value, 0);
	let fri = s[5].reduce((acc, value) => acc + value, 0);
	let sat = s[6].reduce((acc, value) => acc + value, 0);

	return (sun + mon + tues + wed + thurs + fri + sat) * 20
}
