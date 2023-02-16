var humanYearsCatYearsDogYears = function (humanYears) {
	let catYears = 0;
	let dogYears = 0;
	if (humanYears <= 0 || typeof humanYears !== 'number') {
		return [0, 0, 0];
	}
	if (humanYears === 1) {
		catYears = 15;
		dogYears = 15;
	}
	if (humanYears === 2) {
		catYears = 15 + 9;
		dogYears = 15 + 9;
	}
	if (humanYears > 2) {
		catYears = 24 + (4 * (humanYears - 2));
		dogYears = 24 + (5 * (humanYears - 2));;
	}
	return [humanYears, catYears, dogYears];
}

// refactor
var humanYearsCatYearsDogYears = function (humanYears) {
	let catYear = 0;
	let dogYear = 0;
	if (humanYears <= 0 || typeof humanYears !== 'number') {
		return [0, 0, 0];
	}
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) {
			catYear += 15;
			dogYear += 15;
		} else if (i === 2) {
			catYear += 9;
			dogYear += 9;
		}
		else {
			catYear += 4;
			dogYear += 5;
		}
	}
	return [humanYears, catYear, dogYear]
}

// alternate solution
var humanYearsCatYearsDogYears = function (humanYears) {
	switch (humanYears) {
		case 1:
			return [humanYears, 15, 15];
		case 2:
			return [humanYears, 24, 24];
		default:
			return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
	}
}