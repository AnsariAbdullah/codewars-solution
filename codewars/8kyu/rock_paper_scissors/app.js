const rps = (p1, p2) => {
	if (p1 === p2) {
		return 'Draw!'
	}
	// rock
	if (p1 == 'rock') {
		if (p2 == 'scissors') {
			return "Player 1 won!"
		} else if (p2 == 'paper') {
			return "Player 2 won!"
		}
	}
	// paper
	if (p1 == 'paper') {
		if (p2 == 'rock') {
			return "Player 1 won!"
		} else if (p2 == 'scissors') {
			return "Player 2 won!"
		}
	}
	// scissors   
	if (p1 == 'scissors') {
		if (p2 == 'paper') {
			return "Player 1 won!"
		} else if (p2 == 'rock') {
			return "Player 2 won!"
		}
	}
};