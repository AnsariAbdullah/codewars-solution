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

// alternate solution w/o map
interface Array<T> {
	square(): number[];
	cube(): number[];
	average(): number;
	sum(): number;
	even(): number[];
	odd(): number[];
}

Array.prototype.square = function (): number[] {
	const square: number[] = [];
	for (let i = 0; i < this.length; i++) {
		square[i] = Math.pow(this[i], 2);
	}
	return square;
};

Array.prototype.cube = function (): number[] {
	const cube: number[] = [];
	for (let i = 0; i < this.length; i++) {
		cube[i] = Math.pow(this[i], 3);
	}
	return cube;
};

Array.prototype.average = function (): number {
	return this.reduce((acc: number, x: number) => acc + x, 0) / this.length;
};

Array.prototype.sum = function (): number {
	let sum: number = 0;
	for (let i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};

Array.prototype.even = function (): number[] {
	const even: number[] = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 === 0) even.push(this[i]);
	}
	return even;
};

Array.prototype.odd = function (): number[] {
	const odd: number[] = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 !== 0) odd.push(this[i]);
	}
	return odd;
};
