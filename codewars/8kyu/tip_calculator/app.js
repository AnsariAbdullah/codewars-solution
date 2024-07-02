const percentageCalc = (base, percentage) => Math.ceil((base * percentage) / 100)

function calculateTip(amount, rating) {
	const ratings = rating.toLowerCase();
	switch (ratings) {
		case 'terrible':
			return percentageCalc(amount, 0)
			break;
		case 'poor':
			return percentageCalc(amount, 5)
			break;
		case 'good':
			return percentageCalc(amount, 10)
			break;
		case 'great':
			return percentageCalc(amount, 15)
			break;
		case 'excellent':
			return percentageCalc(amount, 20)
			break;
		default:
			return "Rating not recognised"
	}
}