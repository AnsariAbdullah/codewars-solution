function alan(x){
  if(x.includes('Rejection') && x.includes('Disappointment') && x.includes('Backstabbing Central') && x.includes('Shattered Dreams Parkway')){
    return 'Smell my cheese you mother!'
  }else{
    return 'No, seriously, run. You will miss it.'
  }
}

// alternate solution
function alan(x){
  return [
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway'
  ].every(e => x.includes(e)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.'
}