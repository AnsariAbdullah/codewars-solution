export function lineupStudents(students: string): string[] {
  return students
    .split(" ")
    .sort()
    .reverse()
    .sort((a, b) => b.length - a.length);
}
