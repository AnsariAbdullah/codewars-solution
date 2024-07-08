export function calculator(a: number, b: number, sign: string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '/':
        return a / b;
      case '*':
        return a * b;
      default:
        return "unknown value";
    }
  } else {
    return "unknown value";
  }
}
