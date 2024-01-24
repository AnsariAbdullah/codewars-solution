export const filterString = (value: string): number => {
	return +value.replace(/\D/g, '');
}

// alternate solution
export const altfilterString = (value: string): number => {
	let num = '';
	for (let i = 0; i < value.length; i++) {
		if (/\d+/g.test(value[i])) {
			num += value[i];
		}
	}
	return Number(num);
}
