function duckDuckGoose(players, goose) {
  const adjustedIndex = (goose - 1) % players.length;
  return players[adjustedIndex].name;
}
