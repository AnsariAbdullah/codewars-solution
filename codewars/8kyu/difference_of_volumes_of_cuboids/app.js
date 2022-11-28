function findDifference(a, b) {
	let aVolume = a.reduce((total, item) => total * item)
	let bVolume = b.reduce((total, item) => total * item)
	return Math.abs(aVolume - bVolume)
}