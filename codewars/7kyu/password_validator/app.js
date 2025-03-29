function password(str) {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
	return passwordRegex.test(str);
}

function password(str) {
  return str.length >= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);
}