function friend(friends) {
	let frnds = [];
	friends.forEach(item => {
		if (item.length == 4) {
			frnds.push(item)
		}
	})
	return frnds;
}

// Alternate solution
function friend(friends){
  return friends.filter(name => name.length === 4)
}