export function validateHello(greetings: string): boolean {
  const text = greetings.toLowerCase();
  const helloWords = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
return helloWords.some(word =>text.includes(word))
}