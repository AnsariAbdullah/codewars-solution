function calculateTotal(team1, team2) {
 let t1s = team1.reduce((a, c) => a+c, 0);
 let t2s = team2.reduce((a, c) => a+c, 0);
 return t1s > t2s;
}