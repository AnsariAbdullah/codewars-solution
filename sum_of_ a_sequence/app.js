const sequenceSum = (begin, end, step) => {
	let res = 0;
	if (end > begin) {
		for (let i = begin; i <= end; i += step) {
			res += i
		}
	}
	return res
};