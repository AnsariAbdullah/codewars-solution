export function isLochNessMonster(s: string): boolean {
  return (
    s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy")
  );
}

// alternate solution
export function isLochNessMonsterAlt(s: string): boolean {
return /tree fiddy|3\.50|three fifty/i.test(s)
}