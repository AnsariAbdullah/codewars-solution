export function chain(input: number, fs: ((num: number) => number)[]): number {
  let val = input;
  for(let fn of fs){
    val = fn(val)
  }
return val;
}