export function inviteMoreWomen (L: number[]): boolean {
  return L.reduce((a, b) => a+b, 0) > 0
}