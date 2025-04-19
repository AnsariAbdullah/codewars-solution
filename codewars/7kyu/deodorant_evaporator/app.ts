export function evaporator(content: number, evap_per_day: number, threshold: number): number {
	let days = 0;
	let current = 100;

	while (current > threshold) {
		current -= current * (evap_per_day / 100);
		days++;
	}

	return days;
}