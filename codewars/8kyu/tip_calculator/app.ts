export const percentageCalc = (base: number, percentage: number): number => Math.ceil((base * percentage) / 100);

export function calculateTip(amount: number, rating: string): number | string {
  const ratings = rating.toLowerCase();
  switch (ratings) {
    case 'terrible':
      return percentageCalc(amount, 0);
    case 'poor':
      return percentageCalc(amount, 5);
    case 'good':
      return percentageCalc(amount, 10);
    case 'great':
      return percentageCalc(amount, 15);
    case 'excellent':
      return percentageCalc(amount, 20);
    default:
      return "Rating not recognised";
  }
}
