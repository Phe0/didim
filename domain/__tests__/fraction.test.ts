import { describe, expect, it } from "vitest";
import { Fraction } from "../fraction";

describe("Fraction", () => {
  it("should initiate a fraction", () => {
    const fraction = new Fraction({
      name: "Investment",
      percentage: 30,
    });

    expect(fraction.name).toBe("Investment");
    expect(fraction.percentage).toBe(30);
  });
});
