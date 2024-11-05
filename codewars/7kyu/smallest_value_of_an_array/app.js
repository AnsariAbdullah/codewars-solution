function min(arr, toReturn) { 
  let smallestValue = arr[0];
  let smallestIndex = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]<smallestValue){    
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }
  return toReturn == "value" ? smallestValue : smallestIndex;
}
