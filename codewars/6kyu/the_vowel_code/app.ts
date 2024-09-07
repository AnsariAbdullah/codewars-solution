// optimized solution
const  vowels = 'aeiou';
// turn vowels into numbers
export function encode(string: string): string {
  return string.replace(/[aeiou]/g, (x) => (vowels.indexOf(x)+1).toString());
}

// turn numbers back into vowels
export function decode(string: string): string {
  return string.replace(/[1-5]/g, (x) => vowels.charAt(parseInt(x)-1));
}