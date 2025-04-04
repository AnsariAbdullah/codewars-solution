export function password(str: string): boolean {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
	return passwordRegex.test(str);
}
