export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((c) => {
      if (c == c.toUpperCase()) {
        return c.toLowerCase();
      } else {
        return c.toUpperCase();
      }
    })
    .join("");
}

// alternate solution
export function toAlternatingCaseAlt(s: string): string {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      newStr += s[i].toLowerCase();
    } else {
      newStr += s[i].toUpperCase();
    }
  }
  return newStr;
}

// as prototype
String.prototype.toAlternatingCaseProto = function (): string {
  return this.split("")
    .map((c: string) => {
      if (c === c.toUpperCase()) {
        return c.toLowerCase();
      } else {
        return c.toUpperCase();
      }
    })
    .join("");
};
