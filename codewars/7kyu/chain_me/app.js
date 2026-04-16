function chain(input, fs) {
  let val = input;
  for (let fn of fs) {
    val = fn(val);
  }
  return val;
}
