export function elevator(left: number, right: number, call: number): string{
  const distLeft = Math.abs(left - call);
  const distRight = Math.abs(right - call);
  return distLeft < distRight ? 'left' : 'right';
}