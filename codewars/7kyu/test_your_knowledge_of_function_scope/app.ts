export function add(a: number) {
  return function (b: number): number {
    return a + b;
  };
}
