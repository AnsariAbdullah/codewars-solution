function warnTheSheep(queue) {
  let reverseArray = [...queue].reverse();
  let ind = reverseArray.indexOf("wolf")
  if(reverseArray[0] === "wolf") return "Pls go away and stop eating my sheep"
  
  return `Oi! Sheep number ${ind}! You are about to be eaten by a wolf!`;
}