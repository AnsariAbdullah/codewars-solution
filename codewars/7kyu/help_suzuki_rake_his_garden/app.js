function rakeGarden(garden) {
  let word = garden.split(' ');
  for(let i=0; i<word.length; i++){
    if(word[i] !== 'rock' && word[i] !== 'gravel'){
      word[i] = 'gravel'
    }
  }
  return word.join(' ');
}
