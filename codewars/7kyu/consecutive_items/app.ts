export function consecutive(arr: number[], a: number, b: number): boolean {
	let indexofFirst: number = arr.indexOf(a);
	let indexofSecond: number = arr.indexOf(b);
	if (indexofSecond === indexofFirst + 1 || indexofFirst === indexofSecond + 1) {
		return true;
	}
	return false;
}
