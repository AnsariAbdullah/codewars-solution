export function password(str: string): boolean {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
	return passwordRegex.test(str);
}

// alternate solution
export function passwordAlt(str:string): boolean {
  return str.length >= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);
}