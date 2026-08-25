import { expect } from "chai";

import {
  printMarket,
  marketState,
  winnerHint,
  compactMarket,
  printCompact,
} from "../cli/market-view";

describe("market view", function () {
  const market = {
    id: 4n,
    question:
      "Will ETH move higher?",
    yes: 8n,
    no: 3n,
    resolved: false,
  };

  it("prints the market id", function () {
    expect(
      printMarket(market)[0],
    ).to.equal("Market #4");
  });

  it("prints the question", function () {
    expect(
      printMarket(market)[1],
    ).to.contain(
      "Will ETH move higher?",
    );
  });

  it("recognizes active markets", function () {
    expect(
      marketState(market),
    ).to.equal("active");
  });

  it("recognizes resolved markets", function () {
    expect(
      marketState({
        ...market,
        resolved: true,
      }),
    ).to.equal("resolved");
  });

  it("detects YES leading", function () {
    expect(
      winnerHint(market),
    ).to.equal("YES leading");
  });

  it("detects NO leading", function () {
    expect(
      winnerHint({
        ...market,
        yes: 2n,
        no: 9n,
      }),
    ).to.equal("NO leading");
  });

  it("detects a tie", function () {
    expect(
      winnerHint({
        ...market,
        yes: 5n,
        no: 5n,
      }),
    ).to.equal("tie");
  });

  it("creates compact output", function () {
    expect(
      compactMarket(market),
    ).to.contain(
      "active",
    );
  });

  it("prints multiple markets", function () {
    expect(
      printCompact([
        market,
        {
          ...market,
          id: 5n,
        },
      ]),
    ).to.have.length(2);
  });
});
