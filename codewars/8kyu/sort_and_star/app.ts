export function twoSort(s: string[]): string {
  const sortedString: string[] = s.sort();
  return sortedString[0].split('').join('***');
}