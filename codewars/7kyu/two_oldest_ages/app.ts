// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
	ages.sort((a, b) => b - a)
	return [ages[1], ages[0]];
}