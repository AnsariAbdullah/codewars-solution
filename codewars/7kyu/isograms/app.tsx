export function isIsogram(str: string): boolean{
  str = str.toLowerCase();
	for (let i:number = 0; i < str.length; i++) {
		for (let j:number = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				return false;
			}
		}
	}
	return true;
}

// alternate solution
export function isIsogram(str: string): boolean{
  return new Set(str.toLowerCase()).size === str.length
}