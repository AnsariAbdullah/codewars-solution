function rentalCarCost(d) {
	let costAccDay = d * 40
	let finalCost = 0;
	if (d >= 7) {
		finalCost = costAccDay - 50
	} else if (d >= 3) {
		finalCost = costAccDay - 20
	} else {
		finalCost = costAccDay
	}
	return finalCost;
}