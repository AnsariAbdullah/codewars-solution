function cookie(x: string | number): string {
	let who: string = typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "the dog"
  return `Who ate the last cookie? It was ${who}!`
}