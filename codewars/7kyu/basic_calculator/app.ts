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
      if (b == 0) {
        return null;
      } else {
        return a / b;
      }
    case "*":
      return a * b;
    default:
      return null;
  }
}
