function computerToPhone(numbers){
  const map = {
    '7' : '1',
    '8' : '2',
    '9' : '3',
    '1' : '7',
    '2' : '8',
    '3' : '9',
  }
  
  return numbers.split('').map( char => map[char] || char).join('');
}