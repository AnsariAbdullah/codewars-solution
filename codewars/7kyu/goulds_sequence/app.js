function* gould() {
  let n = 0;
  while (true) {
    let x = n, count = 0;
    while (x) {
      x &= x - 1;
      count++;
    }
    yield count;
    n++;
  }
}
