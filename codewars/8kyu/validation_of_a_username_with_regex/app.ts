export function validateUsr(username: string): boolean {
  const usernameRegex: RegExp = /^[a-z0-9_]{4,16}$/;

  const res: boolean = usernameRegex.test(username);
  return res;
}