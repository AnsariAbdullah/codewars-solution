export function countLonelyLetters(text: string): number {
  const letters: string = text.toLowerCase().replace(/[^a-z]/g, '');

  const freq: Record<string, number> = {};

for (const ch of letters) {
	freq[ch] = (freq[ch] || 0) + 1;
}

  let count: number = 0;

  for (const ch in freq) {
    if (freq[ch] === 1) {
      const code: number = ch.charCodeAt(0);

      const prev: string = String.fromCharCode(code - 1);
      const next: string = String.fromCharCode(code + 1);

      const hasPrev: boolean = code > 97 && !!freq[prev];
      const hasNext: boolean = code < 122 && !!freq[next];

      if (!hasPrev && !hasNext) {
        count++;
      }
    }
  }

  return count;
}