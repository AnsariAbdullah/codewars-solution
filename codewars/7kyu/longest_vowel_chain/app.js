function solve(s){
  return Math.max(...s.split(/[^aeiou]/i).map(i => i.length))
}