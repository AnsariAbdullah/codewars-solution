export function spinWords(words: string): string {
  return words.split(' ').map((item: string) => {
    return item.length >= 5 ? item.split('').reverse().join('') : item
  }).join(' ')
}
