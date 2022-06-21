var number = function (array) {
	resultArr = [];
	array.forEach((item, index) => {
		resultArr.push(`${index + 1}: ${item}`)
	})
	return resultArr
}


// alternate optimised solution
var number=function(array){
  return array.map((item, index) => `${index + 1}: ${item}`)
}