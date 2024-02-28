export function consecutive(arr, a, b) {
	return arr.indexOf(a) === arr.indexOf(b) + 1 || arr.indexOf(b) === arr.indexOf(a) + 1
}