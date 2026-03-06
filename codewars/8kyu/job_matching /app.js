function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary) throw new Error("Salary missing");
  return job.maxSalary >= (candidate.minSalary * 0.9)
}