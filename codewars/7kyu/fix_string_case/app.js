function solve(s){
	let lowerCaseChars = 0;
	let upperCaseChars = 0;
	
	for(let char of s){
		if(char === char.toUpperCase()){
			upperCaseChars++
		}else{
			lowerCaseChars++
		}
	}
	
	if(upperCaseChars > lowerCaseChars){
		return s.toUpperCase();
	}else{
		return s.toLowerCase();
	}
}