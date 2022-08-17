function getDivisorsCnt(n){
	let numOfDivisors = 0;
	for(let i=n;i>0; i--){
		if(n%i==0){
			numOfDivisors++
		}
	}
	return numOfDivisors
}