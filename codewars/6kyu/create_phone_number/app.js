function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

// alternate solution
function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx"
  for(let i=0; i<numbers.length; i++){
    format = format.replace('x', numbers[i])
  }
  return format
}