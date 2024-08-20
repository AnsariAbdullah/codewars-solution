Array.prototype.square = function () {
	return this.map(x => x * x)
};

Array.prototype.cube = function () {
	return this.map(x => x * x * x)
};

Array.prototype.sum = function () {
	return this.reduce((acc, x) => acc + x, 0)
};

Array.prototype.average = function () {
	return this.length == 0 ? NaN : this.sum() / this.length
};

Array.prototype.even = function () {
	return this.filter(x => x % 2 === 0)
};

Array.prototype.odd = function () {
	return this.filter(x => x % 2 !== 0)
};


// alternate solution w/o map
Array.prototype.square = function () {
	const square = []
	for (let i = 0; i < this.length; i++) {
		square[i] = Math.pow(this[i], 2)
	}
	return square;
};

Array.prototype.cube = function () {
	const cube = []
	for (let i = 0; i < this.length; i++) {
		cube[i] = Math.pow(this[i], 3)
	}
	return cube;
};

Array.prototype.average = function () {
	return this.reduce((acc, x) => acc + x, 0) / this.length;
};

Array.prototype.sum = function () {
	let sum = 0
	for (let i = 0; i < this.length; i++) {
		sum += this[i]
	}
	return sum;
};

Array.prototype.even = function () {
	const even = []
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 === 0) even.push(this[i])
	}
	return even;
};

Array.prototype.odd = function () {
	const odd = []
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 !== 0) odd.push(this[i])
	}
	return odd;
};