interface Candidate {
  desiresEquity: boolean;
  currentLocation: string;
  desiredLocations: string[];
}

interface Job {
  equityMax: number;
  locations: string[];
}


export function match(job: Job, candidates: Candidate[]): Candidate[] {
  return candidates.filter(candidate => {

    // Equity check
    if (candidate.desiresEquity && job.equityMax === 0) {
      return false;
    }

    // Location check
    const candidateLocations = [
      candidate.currentLocation,
      ...candidate.desiredLocations
    ];

    const locationMatch = job.locations.some(location =>
      candidateLocations.includes(location)
    );

    return locationMatch;
  });
}
