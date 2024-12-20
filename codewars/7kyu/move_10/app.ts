export function moveTen(s: string): string {
	const str: string = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	const arr: number[] = s.split("").map((a: string) => str.indexOf(a) + 10);
	return arr.map((v: number) => str[v]).join("");
}

// alternate solution
export function moveTen1(s: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}