function formatDoB(input: string): [string, string, string] {
  const monthMap: { [key: string]: string } = {
    Jan: "01",
    January: "01",
    Feb: "02",
    February: "02",
    Mar: "03",
    March: "03",
    Apr: "04",
    April: "04",
    May: "05",
    Jun: "06",
    June: "06",
    Jul: "07",
    July: "07",
    Aug: "08",
    August: "08",
    Sep: "09",
    September: "09",
    Oct: "10",
    October: "10",
    Nov: "11",
    November: "11",
    Dec: "12",
    December: "12",
  };

  const [DD, MMtext, YYYY] = input.split("-");
  const MM = monthMap[MMtext];
  if (!MM) throw new Error("Invalid month in date of birth.");
  return [DD.padStart(2, "0"), MM, YYYY];
}

export function driver(data: Array<string>): string {
  const [firstName, middleName, lastName, dob, gender] = data;

  // Get formatted DOB
  const [DD, MM, YYYY] = formatDoB(dob);

  // 1–5: Surname padded with 9s
  const surName: string = lastName.toUpperCase().padEnd(5, "9").slice(0, 5);

  // 6: Decade digit of year
  const decadeDigit: string = YYYY[2];

  // 7–8: Month of birth (adjust for female)
  let monthOfBirth: number = parseInt(MM, 10);
  if (gender.toUpperCase() === "F") {
    monthOfBirth += 50;
  }
  const monthCode: string = String(monthOfBirth).padStart(2, "0");

  // 9–10: Day of birth
  const dayCode: string = DD.padStart(2, "0");

  // 11: Year digit
  const yearDigit: string = YYYY[3];

  // 12–13: Initials
  const initials: string = (
    firstName[0] + (middleName ? middleName[0] : "9")
  ).toUpperCase();

  // 14: Arbitrary 9
  const arbitrary: string = "9";

  // 15–16: Check digits
  const checkDigits: string = "AA";

  return `${surName}${decadeDigit}${monthCode}${dayCode}${yearDigit}${initials}${arbitrary}${checkDigits}`;
}
