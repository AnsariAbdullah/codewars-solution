function position(letter){
  return `Position of alphabet: ${letter.charCodeAt()-96}`
}

// alternate solution
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphabet.indexOf(letter)+1}`
}