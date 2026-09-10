export function calculateTotal(team1: number[], team2: number[]): boolean {
  let t1s = team1.reduce((a, c) => a + c, 0);
  let t2s = team2.reduce((a, c) => a + c, 0);
  return t1s > t2s;
}
