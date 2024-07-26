import { Profile } from "../../profile";

describe("Profile", () => {
  it("should instantiate a profile successfully", () => {
    const profile = new Profile({
      id: "123",
      name: "John Doe",
      email: "test@email.com",
      income: 1000,
      firstTimeUser: false,
    });

    expect(profile).toBeInstanceOf(Profile);
    expect(profile.id).toBe("123");
    expect(profile.name).toBe("John Doe");
    expect(profile.email).toBe("test@email.com");
    expect(profile.income).toBe(1000);
    expect(profile.firstTimeUser).toBe(false);
  });

  it("should correctly convert to insert object", () => {
    const profile = new Profile({
      id: "123",
      name: "John Doe",
      email: "test@email.com",
      income: 1000,
      firstTimeUser: false,
    });
    const insert = profile.toInsert();

    expect(insert).toEqual({
      id: "123",
      name: "John Doe",
      email: "test@email.com",
      income: "1000",
      firstTimeUser: false,
    });
  });
});
