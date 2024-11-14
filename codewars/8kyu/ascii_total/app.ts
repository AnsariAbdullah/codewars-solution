export function uniTotal (string: string): number {
  let result = 0;
  for(let i=0; i<string.length; i++){
    result += string.charCodeAt(i)
  }
  return result;
}