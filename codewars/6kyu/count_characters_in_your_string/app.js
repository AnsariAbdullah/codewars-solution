function count(string) {
	if (string.length > 0) {
		let count = {};
		string.split('').forEach(function (s) {
			count[s] ? count[s]++ : count[s] = 1;
		});
		return count;
	} else {
		return {};
	}
}