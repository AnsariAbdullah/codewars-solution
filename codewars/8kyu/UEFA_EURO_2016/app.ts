export function uefaEuro2016(teams: [string, string], scores: [number, number]): string {
  let result = '';
  if (scores[0] > scores[1]) {
    result = teams[0] + " won!";
  } else if (scores[0] < scores[1]) {
    result = teams[1] + " won!";
  } else {
    result = "teams played draw.";
  }
  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}

// alternate solution
export function uefaEuro20162(teams: [string, string], scores: [number, number]): string {
  const [team1, team2] = teams;
  const [score1, score2] = scores;
  
  const winner = score1 > score2 ? team1 : team2;
  return score1 === score2
    ? `At match ${team1} - ${team2}, teams played draw.`
    : `At match ${team1} - ${team2}, ${winner} won!`;
}
