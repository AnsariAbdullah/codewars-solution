function validateRace(moves) {
  const n = moves.length;
  const used = new Set();

  for (let start = 0; start < n; start++) {
    const finish = start + moves[start];

    if (finish < 0 || finish >= n) return false;
    if (used.has(finish)) return false;

    used.add(finish);
  }

  return true;
}
