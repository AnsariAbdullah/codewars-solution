export function isAN(value: any): boolean {
  return (
    (value instanceof Number || typeof value === "number") &&
    !Number.isNaN(value)
  );
}
