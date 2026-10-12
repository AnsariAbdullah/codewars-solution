export const xor=(a:boolean, b:boolean):boolean => {
  return a && !b ? true : !a && b ? true : false
}