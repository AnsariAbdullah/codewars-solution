function cookie(x){
  let who = typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "the dog"
  return `Who ate the last cookie? It was ${who}!`
}