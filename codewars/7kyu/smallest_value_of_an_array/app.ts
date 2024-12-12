function min(arr: number[], toReturn: "value" | "index"): number { 
  let smallestValue = arr[0];
  let smallestIndex = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestValue) {    
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }

  return toReturn === "value" ? smallestValue : smallestIndex;
}

// alternate solution
function minAlternative(arr: number[], toReturn: "value" | "index"): number { 
  let smallestValue = Math.min(...arr);

  return toReturn === "value" ? smallestValue : arr.indexOf(smallestValue);
}
