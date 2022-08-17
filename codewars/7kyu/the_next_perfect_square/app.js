function findNextSquare(sq) {
  let root1;
  let nextRoot;
  if(Math.sqrt(sq)%1==0){
    root1 = Math.sqrt(sq)
    nextRoot = root1 + 1
    return nextRoot*nextRoot
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  return -1;
}