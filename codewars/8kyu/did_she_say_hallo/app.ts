export function validateHello(greetings: string): boolean {
  const text = greetings.toLowerCase();
  const helloWords = [
    "hello",
    "ciao",
    "salut",
    "hallo",
    "hola",
    "ahoj",
    "czesc",
  ];
  return helloWords.some((word) => text.includes(word));
}

// alternate solution
export function validateHelloAlt(greetings: string): boolean {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings);
}
