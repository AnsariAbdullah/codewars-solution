export function validParentheses(parenStr: string): boolean {
  let balance = 0;

  for (const char of parenStr) {
    if (char === "(") {
      balance++;
    } else if (char === ")") {
      balance--;
      if (balance < 0) return false;
    }
  }

  return balance === 0;
}
