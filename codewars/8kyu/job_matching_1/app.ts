interface Candidate {
  minSalary: number;
}

interface Job {
  maxSalary: number;
}

export function match(candidate: Candidate, job: Job): boolean {
  if (candidate.minSalary == null || job.maxSalary == null) {
    throw new Error("Salary missing");
  }

  return job.maxSalary >= candidate.minSalary * 0.9;
}
