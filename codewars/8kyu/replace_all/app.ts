export function replaceDots(str: string): string {
	return str.replaceAll('.', '-');
}

// alternate solution
export function replaceDotsAlt(str: string): string {
	return str.replace(/\./g, '-');
}