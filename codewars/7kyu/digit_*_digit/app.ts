export class Kata {
	static squareDigits(num: number): number {
		let numb: string = num.toString()
		let res: string = ''
		for (let i = 0; i < numb.length; i++) {
			res += parseInt(numb[i]) * parseInt(numb[i])
		}
		return parseInt(res)
	}
}