export function isLochNessMonster(s: string): boolean {
  return (
    s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy")
  );
}
