function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

// alternate solution
function finalGrade(exam, projects) {
  switch (true) {
    case exam > 90 || projects > 10:
      return 100;
    case exam > 75 && projects >= 5:
      return 90;
    case exam > 50 && projects >= 2:
      return 75;
    default:
      return 0;
  }
}
