export function well(x: string[]): string{
 let goodIdeasLength:number = x.filter((item) => item == "good").length;
 return goodIdeasLength > 2 ? 'I smell a series!' : goodIdeasLength > 0 ? 'Publish!' : 'Fail!'
}