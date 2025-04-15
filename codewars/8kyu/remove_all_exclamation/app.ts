export function remove(string: string): string {
  return string.replace(/!+$/, '');
}