export function extractDigits(str: string): string | null {
  if (typeof str !== "string") return null;

  const cleaned = str.replace(/\D/g, "");

  return cleaned ? cleaned : null;
}

export function getMiddleNumber(value: number): number {
  const str = String(value);
  const mid = Math.floor(str.length / 2);

  return str.length % 2 === 0
    ? Number(str.slice(mid - 1, mid + 1))
    : Number(str[mid]);
}

export function findMiddle(str: string): number {
  const nums = extractDigits(str);

  if (!nums) return -1;

  let product = 1;

  nums.split("").forEach((itm: string) => {
    product *= Number(itm);
  });

  return getMiddleNumber(product);
}
