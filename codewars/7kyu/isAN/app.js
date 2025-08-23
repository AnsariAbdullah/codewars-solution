function isAN(value) {
  return (value instanceof Number || typeof value === 'number') && !Number.isNaN(value)
}