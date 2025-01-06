function whatNumberIsIt(n){
  let type = '';
  if(n == Infinity) type = "Number.POSITIVE_INFINITY";
  else if(n == -Infinity) type = "Number.NEGATIVE_INFINITY";
  else if(n == 5e-324) type = "Number.MIN_VALUE";
  else if(n == 1.7976931348623157e+308) type = "Number.MAX_VALUE";
  else if(isNaN(n)) type = "Number.NaN";
  else type = n;
  return `Input number is ${type}`;  
}

// optimise (use switch) also try to avoid writing repetative text Input number is...
