function friend(friends) {
	let frnds = [];
	friends.forEach(item => {
		if (item.length == 4) {
			frnds.push(item)
		}
	})
	return frnds;
}