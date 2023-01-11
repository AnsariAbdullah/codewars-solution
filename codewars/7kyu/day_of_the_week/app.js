function dayOfTheWeek(date) {
	let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dt = date.split('/')
	return dayNames[new Date(dt.reverse().join('-')).getDay()]
}
