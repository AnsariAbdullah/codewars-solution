export function flickSwitch(arr: string[]): boolean[] {
  let flick: boolean = true;
  return arr.map((val: string) => val === 'flick' ? flick = !flick : flick);
}