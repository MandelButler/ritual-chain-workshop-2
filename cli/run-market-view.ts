import {
  printMarket,
  printCompact,
} from "./market-view";

const markets = [
  {
    id: 1n,
    question:
      "Will ETH reach the target?",
    yes: 12n,
    no: 5n,
    resolved: false,
  },
  {
    id: 2n,
    question:
      "Will BTC stay above the level?",
    yes: 7n,
    no: 10n,
    resolved: true,
  },
];

for (const market of markets) {
  console.log(
    printMarket(market).join("\n"),
  );

  console.log(
    "----------------",
  );
}

console.log(
  "Compact view:",
);

console.log(
  printCompact(markets).join("\n"),
);
