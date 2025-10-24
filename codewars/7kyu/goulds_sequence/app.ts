export function* gould(): Generator<number> {
  let n = 0;
  while (true) {
    let x = n;
    let count = 0;
    while (x) {
      x &= x - 1;
      count++;
    }
    yield count;
    n++;
  }
}