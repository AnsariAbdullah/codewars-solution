function DNAStrand(dna){
  let newArr = [];
  dna.split('').map(item => {
    if(item == 'A'){
      newArr.push('T')
    }else if(item == 'T'){
      newArr.push('A')
    }else if(item == 'C'){
      newArr.push('G')
    }else{
      newArr.push('C')
    }
  })
  return newArr.join('');
}