export function describeAge(a: number): string {
  return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
}