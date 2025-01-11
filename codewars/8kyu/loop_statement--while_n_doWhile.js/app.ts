export function padIt(str: string, n: number): string {
	let res: string = str;
	let i: number = 0;
	while (i < n) {
		if (i % 2 === 0) {
			res = `*${res}`;
		} else {
			res = `${res}*`;
		}
		i++;
	}
	return res;
}
