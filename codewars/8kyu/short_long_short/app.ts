export function shortLongShort(a:string, b:string) {
	let aLenght = a.length;
	 let bLenght = b.length;
	 
	 return aLenght < bLenght ? `${a}${b}${a}` : `${b}${a}${b}`
}
