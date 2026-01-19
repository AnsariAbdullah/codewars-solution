function calculateAge(birthYear, targetYear) {
  let diff = targetYear - birthYear;
  if (diff === 0) return "You were born this very year!";

  if (diff > 0) {
    return `You are ${diff} year${diff === 1 ? "" : "s"} old.`;
  }

  const yearsUntilBorn = Math.abs(diff);
  return `You will be born in ${yearsUntilBorn} year${
    yearsUntilBorn === 1 ? "" : "s"
  }.`;
}

// alternate solution
function calculateAge(m, n) {
  if (m == n) return "You were born this very year!";
  var year = Math.abs(m - n) == 1 ? "year" : "years";
  if (m < n) return "You are " + (n - m) + " " + year + " old.";
  if (m > n) return "You will be born in " + (-n + m) + " " + year + ".";
}
