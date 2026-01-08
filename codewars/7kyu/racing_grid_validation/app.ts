export function validateRace(moves: number[]): boolean {
  const n: number = moves.length;
  const used: Set<number> = new Set();

  for (let start = 0; start < n; start++) {
    const finish: number = start + moves[start];

    if (finish < 0 || finish >= n) return false;
    if (used.has(finish)) return false;

    used.add(finish);
  }

  return true;
}

// alternate solution
export function validateRaceAlt(m: number[]): boolean {
  return !m
    .map((a, b) => a + b)
    .sort((a, b) => a - b)
    .some((a, b) => a ^ b);
}

// alternate solution
export function validateRaceAlt2(moves: number[]): boolean {
  const final = moves.map((v, i) => i + v);
  return (
    final.every((x) => x >= 0 && x < moves.length) &&
    new Set(final).size === moves.length
  );
}
