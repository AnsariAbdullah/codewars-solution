export function openOrSenior(data: [number, number][]): string[] {
	return data.map(([age, handicapStatus]) => (age > 54 && handicapStatus > 7 ? "Senior" : "Open"));
}