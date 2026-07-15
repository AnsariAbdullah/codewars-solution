export function stringClean(s: string): string {
  return s.replaceAll(/[0-9]/g, "");
}
