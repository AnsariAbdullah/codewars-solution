export function DNAtoRNA(dna: string): string {
  // return dna.replaceAll('T', 'U');
	// the above code works as well but throws 'replaceAll' does not exist on type 'string'
	return dna.replace(/T/g, 'U');
}

