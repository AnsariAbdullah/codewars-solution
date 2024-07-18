function solution(a, b) {
	let aLenght = a.length;
	let bLenght = b.length;

	return aLenght < bLenght ? `${a}${b}${a}` : `${b}${a}${b}`
}
