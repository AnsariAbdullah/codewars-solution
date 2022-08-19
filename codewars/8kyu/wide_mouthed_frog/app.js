function mouthSize(animal) {
	return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}

// alternate solution
mouthSize = x => x.match(/alligator/i) ? 'small' : 'wide';
