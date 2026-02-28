function validateHello(greetings) {
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
function validateHello(greetings) {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}