function points(games) {
	let pts = 0;
	games.forEach(item => {
		let arr = item.split(':');
		let x = item[0];
		let y = item[2];
		x > y ? pts += 3 : x == y ? pts += 1 : pts += 0
	})
	return pts;
}