export const filterString = (value: string): number => {
  return +value.replace(/\D/g, '');
}