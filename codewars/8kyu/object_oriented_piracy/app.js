class Ship {
	constructor(draft, crew) {
		this.draft = draft
		this.crew = crew
		this.crewWeight = crew * 1.5
	}

	isWorthIt = function () {
		return this.draft - this.crewWeight > 20
	}
}