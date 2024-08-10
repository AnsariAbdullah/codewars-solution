function dataReverse(data) {
	const byteLength = 8;
	const result = [];
	for (let i = data.length - byteLength; i >= 0; i -= byteLength) {
		for (let j = 0; j < byteLength; j++) {
			result.push(data[i + j])
		}
	}
	return result;
}

// alternate solution
function dataReverse(data) {
  let byte = []
  for(let i=0; i<data.length; i+=8){
    byte.unshift(...data.slice(i, i+8))
  }
  return byte;
}