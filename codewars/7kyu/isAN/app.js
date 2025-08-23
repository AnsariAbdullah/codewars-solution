function isAN(value) {
  if (typeof value === "number") return !Number.isNaN(value);
  if (value instanceof Number) return !Number.isNaN(value.valueOf());

  return false;
}
