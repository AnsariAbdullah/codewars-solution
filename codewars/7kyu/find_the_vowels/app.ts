export function vowelIndices(word: string): number[] {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'y'];
  let result: number[] = []
  const words: string = word.toLowerCase();
  for(let i=0; i<words.length; i++){
    if(vowels.includes(words[i])){
      result.push(i+1)
    }
  }
  return result
}