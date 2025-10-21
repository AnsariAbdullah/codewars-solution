export function spEng(sentence: string): boolean {
  return sentence.toLowerCase().includes("english");
}

// alternate solution
export function spEngAlt(sentence: string): boolean{
  return /english/i.test(sentence);
}