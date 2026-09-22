function well(x){
  let ideasArr = x.filter((item) => item == "good");
  let lgth = ideasArr.length;
  return lgth > 2 ? 'I smell a series!' : lgth > 0 ? 'Publish!' : 'Fail!'
}