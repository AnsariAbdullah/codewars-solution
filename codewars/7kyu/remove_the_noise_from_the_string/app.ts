export function removeNoise(str: string): string {
  return str.replace(/[%$&/#·@|º\\ª]/g, "");
}
