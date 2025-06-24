type Player = {
  name: string;
};

export function duckDuckGoose<T>(players: Player[], goose: number): string {
  const adjustedIndex = (goose - 1) % players.length;
  return players[adjustedIndex].name;
}
