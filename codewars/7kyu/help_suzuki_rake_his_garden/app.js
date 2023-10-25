function rakeGarden(garden) {
  let word = garden.split(' ');
  for(let i=0; i<word.length; i++){
    if(word[i] !== 'rock' && word[i] !== 'gravel'){
      word[i] = 'gravel'
    }
  }
  return word.join(' ');
}

// alternate solution
function rakeGarden(garden) {
  return garden.split(' ').map(item => item === 'rock' ? 'rock' : 'gravel').join(' ');
}