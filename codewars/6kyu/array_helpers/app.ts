interface Array<T> {
	square(): number[];
	cube(): number[];
	average(): number;
	sum(): number;
	even(): number[];
	odd(): number[];
}

Array.prototype.square = function (): number[] {
	return this.map(x => x * x);
};

Array.prototype.cube = function (): number[] {
	return this.map(x => x * x * x);
};

Array.prototype.average = function (): number {
	return this.length === 0 ? NaN : this.sum() / this.length;
};

Array.prototype.sum = function (): number {
	return this.reduce((acc, x) => acc + x, 0);
};

Array.prototype.even = function (): number[] {
	return this.filter(x => x % 2 === 0);
};

Array.prototype.odd = function (): number[] {
	return this.filter(x => x % 2 !== 0);
};

