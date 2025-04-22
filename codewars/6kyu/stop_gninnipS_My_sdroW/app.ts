export function spinWords(words: string): string {
	return words.split(' ').map((item: string) => {
		return item.length >= 5 ? item.split('').reverse().join('') : item
	}).join(' ')
}


// alternate solution
export function spinWordsAlt(words: string): string {
	return words.replace(/\w{5,}/g, (w: string) => w.length >= 5 ? w.split('').reverse().join('') : w)
}