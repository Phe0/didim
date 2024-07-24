import { Fraction } from "../fraction";

describe("Fraction", () => {
  it("should instantiate a fraction successfully", () => {
    const fraction = new Fraction({
      id: 1,
      name: "Fraction 1",
      percentage: 0.5,
      profileId: "123",
    });

    expect(fraction).toBeInstanceOf(Fraction);
    expect(fraction.id).toBe(1);
    expect(fraction.name).toBe("Fraction 1");
    expect(fraction.percentage).toBe(0.5);
    expect(fraction.profileId).toBe("123");
  });

  it("should correctly convert to insert object", () => {
    const fraction = new Fraction({
      id: 1,
      name: "Fraction 1",
      percentage: 0.5,
      profileId: "123",
    });
    const insert = fraction.toInsert();

    expect(insert).toEqual({
      id: 1,
      name: "Fraction 1",
      percentage: "0.5",
      profileId: "123",
    });
  });
});
