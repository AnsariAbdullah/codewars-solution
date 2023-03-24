var number = function (busStops) {
	let numberOfPeopleLeft = 0;
	busStops.forEach(a => numberOfPeopleLeft = numberOfPeopleLeft + a[0] - a[1])
	return numberOfPeopleLeft;
}