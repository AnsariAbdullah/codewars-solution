function match(candidate, job) {
  if (!candidate || candidate.minSalary == null) {
    throw new Error("Candidate minimum salary is required");
  }

  if (!job || job.maxSalary == null) {
    throw new Error("Job maximum salary is required");
  }

  const adjustedMinSalary = candidate.minSalary * 0.9;

  return adjustedMinSalary <= job.maxSalary;
}