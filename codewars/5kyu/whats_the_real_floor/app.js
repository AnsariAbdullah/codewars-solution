function getRealFloor(n) {
	return n <= 0 ? n : n >= 13 ? n - 2 : n - 1;
}