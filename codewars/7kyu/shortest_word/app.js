function findShort(s){
  let wordLengths = []
  s.split(' ').map(item => {
    wordLengths.push(item.length)
  })
  return Math.min(...wordLengths)
}