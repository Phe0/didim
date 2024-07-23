import { describe, expect, it } from "vitest";
import { User } from "../user";
import { FinancialDetails } from "../financial-details";
import { SelectUser } from "@/db/schemas/user";

describe("User", () => {
  it("should initiate a user", () => {
    const financialDetails = new FinancialDetails({
      id: 3,
      income: 1000,
    });

    const user = new User({
      id: "123",
      name: "Pedro",
      firstTimeUser: false,
      financialDetails,
    });

    expect(user.id).toBe("123");
    expect(user.name).toBe("Pedro");
    expect(user.firstTimeUser).toBe(false);
    expect(user.financialDetails).toBe(financialDetails);
  });

  it("should default firstTimeUser to true", () => {
    const financialDetails = new FinancialDetails({
      id: 3,
      income: 1000,
    });
    const user = new User({
      id: "123",
      name: "Pedro",
      financialDetails,
    });

    expect(user.firstTimeUser).toBe(true);
  });

  it("should correctly convert User to Insert", () => {
    const financialDetails = new FinancialDetails({
      id: 3,
      income: 1000,
    });
    const user = new User({
      id: "123",
      name: "Pedro",
      firstTimeUser: false,
      financialDetails,
    });

    const expected = {
      id: "123",
      name: "Pedro",
      firstTimeUser: false,
      financialDetailsId: 3,
    };

    expect(user.toInsert()).toStrictEqual(expected);
  });

  it("should correctly convert Select to User", () => {
    const select: SelectUser = {
      id: "123",
      name: "Pedro",
      financialDetailsId: 3,
      financialDetails: {
        id: 3,
        income: "1000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      firstTimeUser: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = User.fromSelect(select);

    expect(user.id).toBe("123");
    expect(user.name).toBe("Pedro");
    expect(user.firstTimeUser).toBe(false);
    expect(user.financialDetails.id).toBe(3);
    expect(user.financialDetails.income).toBe(1000);
  });
});
