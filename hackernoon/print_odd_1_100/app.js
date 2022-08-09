for (let i = 1; i <= 100; i += 2) {
	console.log(i)
}

// alternate solution
for (let i = 1; i <= 100; i++) {
	if (i % 2 !== 0) {
		console.log(i)
	}
}