const reverse = (array: any[]): any[] => {
  let arr: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
};
