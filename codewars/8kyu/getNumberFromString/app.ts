function getNumberFromString(s: string): number {
  const digitString: string = s.replace(/\D/g, '');

  return parseInt(digitString);
}
