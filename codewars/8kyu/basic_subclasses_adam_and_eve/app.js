class God {
	/**
	 * @returns Human[]
	 */
	static create() {
		return [new Man(), new Woman()]
	}
}
// code
class Human {
	constructor(name) {
		this.name = name;
	}
}

class Man extends Human {
	constructor(name) {
		super(name)
	}
}

class Woman extends Human {
	constructor(name) {
		super(name)
	}
}