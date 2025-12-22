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

// alternate solution
let validateRace = (m) =>
  !m
    .map((a, b) => a + b)
    .sort((a, b) => a - b)
    .some((a, b) => a ^ b);

// alternate solution
function validateRace(moves) {
  const final = moves.map((v, i) => i + v);
  return (
    final.every((x) => x >= 0 && x < moves.length) &&
    new Set(final).size === moves.length
  );
}
