function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// alternate solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}