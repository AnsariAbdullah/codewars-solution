function countLonelyLetters(text) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, "");

  const freq = {};
  for (const ch of letters) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let count = 0;

  for (const ch in freq) {
    if (freq[ch] === 1) {
      const code = ch.charCodeAt(0);

      const prev = String.fromCharCode(code - 1);
      const next = String.fromCharCode(code + 1);

      const hasPrev = code > 97 && freq[prev];
      const hasNext = code < 122 && freq[next];

      if (!hasPrev && !hasNext) {
        count++;
      }
    }
  }

  return count;
}
