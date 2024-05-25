export function isReallyNaN(val: any): boolean {
  return Number.isNaN(val);
};

// alternate solution
export function isReallyNaNAlt(val: any): boolean {
  return typeof val === 'number' && isNaN(val)
};