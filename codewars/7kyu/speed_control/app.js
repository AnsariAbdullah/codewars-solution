function gps(s, x) {
  if (x.length <= 1) return 0;

  let maxSpeed = 0;

  for (let i = 0; i < x.length; i++) {
    const delta = x[i] - x[i - 1];
    const speed = (3600 * delta) / s;
    if (speed > maxSpeed) maxSpeed = speed;
  }

  return maxSpeed;
}
