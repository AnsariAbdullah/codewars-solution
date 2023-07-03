function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

function disemvowel(str) {
  let vowels = 'aeiou';
  return str
				.split('')
				.filter(letter => !vowels.includes(letter.toLowerCase()))
				.join('');
}