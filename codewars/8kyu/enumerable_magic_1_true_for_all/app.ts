export function all(arr: any[], fun: (item: any) => boolean): boolean {
  return arr.every(item => fun(item))
}