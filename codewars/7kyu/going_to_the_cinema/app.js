function movie(card, ticket, perc) {
  let n = 0;
  let totalA = 0;
  let totalB = card;
  let currentTicketPrice = ticket;

  while (Math.ceil(totalB) >= totalA) {
    n++;
    totalA += ticket;
    currentTicketPrice *= perc;
    totalB += currentTicketPrice;
  }

  return n;
};