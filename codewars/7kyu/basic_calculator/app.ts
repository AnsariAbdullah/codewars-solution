export function calculate(
  a: number,
  operator: string,
  b: number
): number | null {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return b === 0 ? null : a / b;
    case "*":
      return a * b;
    default:
      return null;
  }
}
