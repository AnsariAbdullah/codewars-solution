function roundToNext5(n) {
	if (n % 5 === 0) {
		return n;
	}
	if (n > 0) {
		return n + (5 - (n % 5));
	} else {
		return n - (n % 5);
	}
}

// alternate solution
function roundToNext5(n){
  return Math.ceil(n/5) * 5
}
