function match(job, candidates) {
  return candidates.filter(candidate => {
    if (candidate.desiresEquity && job.equityMax === 0) {
      return false;
    }
		
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