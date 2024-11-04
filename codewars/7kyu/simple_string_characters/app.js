function solve(s) {
	let uppercase = 0, lowercase = 0, numbers = 0, special = 0;
	for (let i = 0; i < s.length; i++) {
		if (/[A-Z]/.test(s[i])) {
			uppercase++
		} else if (/[a-z]/.test(s[i])) {
			lowercase++
		} else if (/[0-9]/.test(s[i])) {
			numbers++
		} else {
			special++
		}
	}
	return [uppercase, lowercase, numbers, special]
}