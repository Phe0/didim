import { describe, expect, it } from "vitest";
import { UserConfig } from "../user-config";

describe("UserConfig", () => {
  it("should initiate a user config", () => {
    const userConfig = new UserConfig({
      id: "123",
      income: 6000,
      firstTimeUser: false,
    });

    expect(userConfig.id).toBe("123");
    expect(userConfig.income).toBe(6000);
    expect(userConfig.firstTimeUser).toBe(false);
  });

  it("should default firstTimeUser to true", () => {
    const userConfig = new UserConfig({
      id: "123",
    });

    expect(userConfig.firstTimeUser).toBe(true);
  });

  it("should correctly convert UserConfig to Insert", () => {
    const userConfig = new UserConfig({
      id: "123",
      income: 6000,
      firstTimeUser: false,
    });

    const expected = {
      id: "123",
      income: "6000",
      firstTimeUser: false,
    };

    expect(userConfig.toInsert()).toStrictEqual(expected);
  });

  it("should correctly convert Select to UserConfig", () => {
    const select = {
      id: "123",
      income: "6000",
      firstTimeUser: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userConfig = UserConfig.fromSelect(select);

    expect(userConfig.id).toBe("123");
    expect(userConfig.income).toBe(6000);
    expect(userConfig.firstTimeUser).toBe(false);
  });
});
