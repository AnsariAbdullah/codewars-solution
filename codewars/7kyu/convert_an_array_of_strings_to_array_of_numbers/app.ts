export function toNumberArray(stringarray: string[]): number[] {
  return stringarray.map(item => Number(item));
}