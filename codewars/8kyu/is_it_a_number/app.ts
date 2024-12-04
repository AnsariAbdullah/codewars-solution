export function isDigit(s: string): boolean {
  return s.trim() == parseFloat(s).toString()
}