function stray(numbers) {
	let number = 0
	numbers.forEach(x => { if (numbers.indexOf(x) < 1) number = x })
	numbers.forEach(x => { if (numbers.indexOf(x) > 1) number = x })
	return number
}