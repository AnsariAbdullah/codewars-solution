function password(str) {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
	return passwordRegex.test(str);
}
