export function counterEffect(hitCount: string): number[][] {
  let result = [];
  for (let i = 0; i < hitCount.length; i++) {
    let tempArr = [];
    for (let j = 0; j <= Number(hitCount[i]); j++) {
      tempArr.push(j);
    }
    result.push(tempArr);
  }
  return result;
}

// alternate solution
export function counterEffectAlt(hitCount: string): number[][] {
  let counter: number[][]; 
  counter = hitCount.split('').map((item) => {
    let newArr = [];
    for(let i=0; i<=Number(item); i++){
      newArr.push(i)
    }
    return newArr;
  })   
  return counter;
}
