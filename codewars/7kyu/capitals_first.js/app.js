function capitalsFirst(input) {
  const words = input.split(' ');
  const uppers = [];
  const lowers = [];

  for (const word of words) {
    if (/^[A-Z]/.test(word)) {
      uppers.push(word);
    } else if (/^[a-z]/.test(word)) {
      lowers.push(word);
    }
  }

  return [...uppers, ...lowers].join(" ");
}
