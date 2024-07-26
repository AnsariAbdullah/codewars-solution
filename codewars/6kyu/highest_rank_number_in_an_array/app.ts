export function highestRank(arr: number[]): number {
	const frequencyMap: { [key: number]: number } = {};

	for (const num of arr) {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	}

	let maxFrequency = 0;
	let mostFrequent = -Infinity;

	for (const num in frequencyMap) {
		const frequency = frequencyMap[num];
		const number = parseInt(num);

		if (frequency > maxFrequency || (frequency === maxFrequency && number > mostFrequent)) {
			maxFrequency = frequency;
			mostFrequent = number;
		}
	}

	return mostFrequent;
}
