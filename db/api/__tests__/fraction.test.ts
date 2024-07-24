import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { FractionDbApi } from "../fraction";
import { Fraction } from "@/domain/fraction";
import { FractionInsert, FractionSelect } from "@/db/schemas/fraction";

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

const fraction = new Fraction({
  id: "1",
  name: "Fraction",
  profileId: "1",
  percentage: 50,
});

const fractionInsert: FractionInsert = {
  name: "Fraction",
  profileId: "1",
  percentage: "50",
};

const fractionSelect: FractionSelect = {
  id: "1",
  name: "Fraction",
  profileId: "1",
  percentage: "50",
};

describe("ProfileDbApi", () => {
  const fractionDbApi = new FractionDbApi(mockDb);
  it("should create a new fraction", async () => {
    mockReturning.mockResolvedValue([fractionSelect]);

    const result = await fractionDbApi.create(fractionInsert);

    expect(mockValues).toHaveBeenCalledWith(fractionInsert);
    expect(result).toEqual(fraction);
  });

  it("should update a fraction", async () => {
    mockReturning.mockResolvedValue([{ ...fractionSelect, name: "Updated" }]);

    const result = await fractionDbApi.update("1", { name: "Updated" });

    expect(mockSet).toHaveBeenCalledWith({ name: "Updated" });
    expect(result).toEqual(
      new Fraction({
        id: "1",
        name: "Updated",
        profileId: "1",
        percentage: 50,
      })
    );
  });

  it("should get a fraction by id", async () => {
    mockWhere.mockResolvedValue([fractionSelect]);

    const result = await fractionDbApi.getById("1");

    expect(result).toEqual(fraction);
  });
});
