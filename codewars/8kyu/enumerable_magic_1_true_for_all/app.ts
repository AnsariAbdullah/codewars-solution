export function all(arr: any[], fun: (item: any) => boolean): boolean {
	for (let i = 0; i < arr.length; i++) {
		if (!fun(arr[i])) {
			return false;
		}
	}
	return true;
}