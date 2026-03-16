function circleArea(radius) {
  if (radius <= 0) throw new Error("Incorrect value");
  return Math.PI * radius * radius;
}
