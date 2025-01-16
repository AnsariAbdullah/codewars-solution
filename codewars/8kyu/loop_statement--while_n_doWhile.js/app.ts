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


// alternate solution
export function padItAlt(str: string, n: number): string {
  let res: string = str;
  let i: number = 0;
  let side: boolean = true;
  while (i < n) {
    if (side) {
      res = `*${res}`;
      side = false;
    } else {
      res = `${res}*`;
      side = true;
    }
    i++;
  }
  return res;
}
