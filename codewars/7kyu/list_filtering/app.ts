function filter_list(l: (number | string)[]): number[] {
	return l.filter((item): item is number => typeof item === 'number');
}
