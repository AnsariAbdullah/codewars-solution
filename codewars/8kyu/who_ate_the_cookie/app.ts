function cookie(x: string | number): string {
  return `Who ate the last cookie? It was ${typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "the dog"}!`;
}