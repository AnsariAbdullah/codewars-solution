function duckDuckGoose(players, goose) {
  const adjustedIndex = (goose - 1) % players.length;
  return players[adjustedIndex].name;
}

// alternate solution
function duckDuckGoose(players, goose) {
  let circle = goose;
  while (players.length < circle) {
    circle -= players.length;
  }
  return players[circle - 1].name;
}
