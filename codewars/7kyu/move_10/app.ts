export function moveTen(s: string): string {
	const str: string = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	const arr: number[] = s.split("").map((a: string) => str.indexOf(a) + 10);
	return arr.map((v: number) => str[v]).join("");
}
