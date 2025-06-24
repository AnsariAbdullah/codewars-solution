type Player = {
  name: string;
};

export function duckDuckGoose<T>(players: Player[], goose: number): string {
  const adjustedIndex = (goose - 1) % players.length;
  return players[adjustedIndex].name;
}

// alternate solution
export function duckDuckGooseAlt(players: Player[], goose: number): string {
  let circle = goose;
  while(players.length < circle) {
      circle -= players.length
    }
    return players[circle - 1 ].name
}