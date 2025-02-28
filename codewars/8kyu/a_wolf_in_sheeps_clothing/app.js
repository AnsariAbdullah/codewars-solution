function warnTheSheep(queue) {
	let reverseArray = [...queue].reverse();
	let ind = reverseArray.indexOf("wolf")
	if (reverseArray[0] === "wolf") return "Pls go away and stop eating my sheep"

	return `Oi! Sheep number ${ind}! You are about to be eaten by a wolf!`;
}

// alternate solution
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position ? 
    `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep"
  ;
}