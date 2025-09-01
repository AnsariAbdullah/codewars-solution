export const gps = (s: number, xs: number[]): number => {
  if (xs.length <= 1) return 0;

  let maxSpeed = 0;
  for (let i = 0; i < xs.length; i++) {
    const delta = xs[i] - xs[i - 1];
    const speed = (3600 * delta) / s;
    if (speed > maxSpeed) maxSpeed = speed;
  }
  return maxSpeed;
};
