const  vowels = 'aeiou';

function encode(string) {
  return string.replace(/[aeiou]/g, (x) => (vowels.indexOf(x)+1).toString());
}

function decode(string) {
  return string.replace(/[1-5]/g, (x) => vowels.charAt(parseInt(x)-1));
}
