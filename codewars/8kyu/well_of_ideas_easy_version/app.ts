export function well(x: string[]): string{
 let ideasArr: string[] = x.filter((item) => item == "good");
 let lgth: number = ideasArr.length;
 return lgth > 2 ? 'I smell a series!' : lgth > 0 ? 'Publish!' : 'Fail!'
}