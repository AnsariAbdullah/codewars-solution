function capitalize(p) {
	let s = p.toLowerCase();
	return s && s[0].toUpperCase() + s.slice(1);
}

function hello(name) {
	return typeof name === "undefined" || name.length === 0 ? 'Hello, World!' : `Hello, ${capitalize(name)}!`;
}