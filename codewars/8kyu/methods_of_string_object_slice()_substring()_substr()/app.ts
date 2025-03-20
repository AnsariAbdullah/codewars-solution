export function cutIt(arr: string[]): string[] {
	let shortestString = arr[0].length;
	let result: string[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length < shortestString) shortestString = arr[i].length;
	}
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i].substr(0, shortestString))
	}
	return result;
}

// alternate solution
export function cutItAlt(arr: string[]): string[]{
  const shortestStringLength: number = Math.min(...arr.map(x => x.length))
  return arr.map(item => item.substr(0, shortestStringLength));
}