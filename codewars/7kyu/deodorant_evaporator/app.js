function evaporator(content, evap_per_day, threshold) {
	let days = 0;
	let current = 100;

	while (current > threshold) {
		current -= current * (evap_per_day / 100);
		days++;
	}

	return days;
}