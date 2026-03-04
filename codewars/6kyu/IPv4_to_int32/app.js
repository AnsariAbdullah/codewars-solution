function ipToInt32(ip) {
  return (
    ip
      .split(".")
      .map(Number)
      .reduce((acc, octet) => (acc << 8) | octet, 0) >>> 0
  );
}
