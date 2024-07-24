import { Profile } from "@/domain/profile";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ProfileDbApi } from "../profile";
import { ProfileInsert, ProfileSelect } from "@/db/schemas/profile";

const mockInsert = jest.fn();
const mockValues = jest.fn();
const mockReturning = jest.fn();
const mockUpdate = jest.fn();
const mockSet = jest.fn();
const mockWhere = jest.fn();
const mockSelect = jest.fn();
const mockFrom = jest.fn();

const mockDb = {
  insert: mockInsert.mockReturnValue({
    values: mockValues.mockReturnValue({ returning: mockReturning }),
  }),
  update: mockUpdate.mockReturnValue({
    set: mockSet.mockReturnValue({
      where: mockWhere.mockReturnValue({ returning: mockReturning }),
    }),
  }),
  select: mockSelect.mockReturnValue({
    from: mockFrom.mockReturnValue({ where: mockWhere }),
  }),
} as unknown as PostgresJsDatabase;

const profile = new Profile({
  id: "1",
  name: "John Doe",
  email: "test@email.com",
  income: 1000,
  firstTimeUser: false,
});

const profileInsert: ProfileInsert = {
  id: "1",
  name: "John Doe",
  email: "test@email.com",
  income: "1000",
  firstTimeUser: false,
};

const profileSelect: ProfileSelect = {
  id: "1",
  name: "John Doe",
  email: "test@email.com",
  income: "1000",
  firstTimeUser: false,
};

describe("ProfileDbApi", () => {
  const profileDbApi = new ProfileDbApi(mockDb);
  it("should create a new profile", async () => {
    mockReturning.mockResolvedValue([profileSelect]);

    const result = await profileDbApi.create(profileInsert);

    expect(mockValues).toHaveBeenCalledWith(profileInsert);
    expect(result).toEqual(profile);
  });

  it("should update a profile", async () => {
    mockReturning.mockResolvedValue([{ ...profileSelect, name: "Pedro" }]);

    const result = await profileDbApi.update(profileInsert.id, {
      name: "Pedro",
    });

    expect(mockSet).toHaveBeenCalledWith({ name: "Pedro" });
    expect(result).toEqual(
      new Profile({
        id: "1",
        name: "Pedro",
        email: "test@email.com",
        income: 1000,
        firstTimeUser: false,
      })
    );
  });

  it("should get a profile by id", async () => {
    mockWhere.mockResolvedValue([profileSelect]);

    const result = await profileDbApi.getById("1");

    expect(result).toEqual(profile);
  });
});
