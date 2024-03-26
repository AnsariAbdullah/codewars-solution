export function alphabetPosition(text: string): string {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let result: string = '';

  for (let i: number = 0; i < text.length; i++) {
    const char: string = text[i].toLowerCase();
    if (alphabet.includes(char)) {
      result += (alphabet.indexOf(char) + 1) + ' ';
    }
  }

  result = result.trim();

  return result;
}