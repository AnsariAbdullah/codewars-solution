function reverseBytes(data: number[]): number[] {
	if (data.length % 8 !== 0) {
			throw new Error("Data length must be a multiple of 8.");
	}

	const byteLength = 8;
	const result: number[] = [];

	for (let i = data.length - byteLength; i >= 0; i -= byteLength) {
			for (let j = 0; j < byteLength; j++) {
					result.push(data[i + j]);
			}
	}

	return result;
}
