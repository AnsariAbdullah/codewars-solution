function count(string) {
	let cache = {}
	if (string.length > 0) {
		string.split('').map(v => cache[v] = cache[v] + 1 || 1)
		return cache;
	} else {
		return {};
	}
}
