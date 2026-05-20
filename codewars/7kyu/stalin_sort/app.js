function stalinSort(array) {
  if (array.length === 0) return;
  
  let survivor = array[0];
  let writeIndex = 1;
  for(let i=1;i<array.length; i++){
    if(array[i]>= survivor){
      survivor = array[i];
      array[writeIndex] = array[i];
      writeIndex++
    }
  }
 array.length = writeIndex;
}