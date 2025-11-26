export function was_package_received_yesterday(
  tz_from: number,
  tz_to: number,
  start: number,
  duration: number
): boolean {
  const utc_send = start - tz_from;
  const utc_arrival = utc_send + duration;
  const local_arrival = utc_arrival + tz_to;
  return local_arrival < 0;
}
