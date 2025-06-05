function heron(a, b, c) {
  const s = (a + b + c) / 2;
  const sqRoot = s * (s - a) * (s - b) * (s - c);
  return Math.sqrt(sqRoot);
}
