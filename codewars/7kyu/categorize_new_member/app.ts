export function openOrSenior(data: [number, number][]): string[] {
  let result: string[] = [];
  for (let i = 0; i < data.length; i++) {
    const [age, handStatus] = data[i];
    if (age > 54 && handStatus > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}