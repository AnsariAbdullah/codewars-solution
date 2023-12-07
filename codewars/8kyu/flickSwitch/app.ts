export function flickSwitch(arr: string[]): boolean[] {
  let flick: boolean = true;
  return arr.map((val: string) => val === 'flick' ? flick = !flick : flick);
}

// alternate solution
function flickSwitch2(arr: string[]): boolean[] {
	let resultArr: boolean[] = []
	let boolVal: boolean = true;
	arr.forEach(item => {
		if (item !== 'flick') {
			resultArr.push(boolVal)
		} else {
			boolVal = !boolVal;
			resultArr.push(boolVal)
		}
	})
	return resultArr
}