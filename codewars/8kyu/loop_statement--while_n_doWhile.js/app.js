function padIt(str, n) {
	let res = str;
	let i = 0;
	while (i < n) {
		if (i % 2 == 0) {
			res = `*${res}`;
		} else {
			res = `${res}*`;
		}
		i++
	}
	return res;
}

// alternate solution
function padIt(str,n){
  let res = str;
  let i = 0;
  let side = true;
  while(i<n){
    if(side){
      res = "*"+res;
      side = false;
    }else{
      res = res+"*";
      side = true;
    }
    i++
  }
  return res;
}