function whatNumberIsIt(n){
  let text = ''
  if(n == Number.MAX_VALUE){
    text = 'Input number is Number.MAX_VALUE'
  }else if (n == Number.MIN_VALUE){
    text = 'Input number is Number.MIN_VALUE'
  }else if(isNaN(n)){
    text = "Input number is Number.NaN"
  }else if(n == Number.NEGATIVE_INFINITY){
    text = "Input number is Number.NEGATIVE_INFINITY"
  }else if(n == Number.POSITIVE_INFINITY){
    text = "Input number is Number.POSITIVE_INFINITY"
  }else{
    text = "Input number is " + n
  }
  return text
}

// optimise (use switch) also try to avoid writing repetative text Input number is...
