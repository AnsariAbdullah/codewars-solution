function solution(a, b){
  return a.length < b.length ? a + b + a : b + a + b
}

// alternate solution
function solutionAlt(a, b){
  let [short, long] = [a,b].sort((a, b) => a.length - b.length);
  return `${short}${long}${short}`;
}
