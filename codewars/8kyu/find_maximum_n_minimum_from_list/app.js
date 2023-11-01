var min = function(list){
    
	return Math.min(...list);
}

var max = function(list){
	
	return Math.max(...list);
}

// alternate solution
var min = function(list){
	let arr = list.sort((a, b) => a-b)
	return arr[0];
}

var max = function(list){
	let arr = list.sort((a, b) => b-a)
	return arr[0];
}