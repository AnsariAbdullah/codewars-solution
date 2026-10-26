function solve(x, y) {
  x = BigInt(x);
  y = BigInt(y);

  return x + (y * x * (x - 1n)) / 2n;
}
