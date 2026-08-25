export type MarketView = {
  id: bigint;
  question: string;
  yes: bigint;
  no: bigint;
  resolved: boolean;
};

export function printMarket(
  market: MarketView,
): string[] {
  const lines: string[] = [];

  lines.push(
    `Market #${market.id}`,
  );

  lines.push(
    `Question: ${market.question}`,
  );

  lines.push(
    `YES: ${market.yes}`,
  );

  lines.push(
    `NO: ${market.no}`,
  );

  lines.push(
    `Resolved: ${
      market.resolved
        ? "yes"
        : "no"
    }`,
  );

  return lines;
}

export function marketState(
  market: MarketView,
): string {
  if (market.resolved) {
    return "resolved";
  }

  return "active";
}

export function winnerHint(
  market: MarketView,
): string {
  if (market.yes === market.no) {
    return "tie";
  }

  return market.yes > market.no
    ? "YES leading"
    : "NO leading";
}

export function compactMarket(
  market: MarketView,
): string {
  return [
    `#${market.id}`,
    marketState(market),
    winnerHint(market),
  ].join(" | ");
}

export function printCompact(
  markets: MarketView[],
): string[] {
  return markets.map(
    compactMarket,
  );
}
