import { FractionDbApi } from "@/db/api/fraction-db-api";
import { FractionRepository } from "../fraction-repository";
import { FractionSelect } from "@/db/schemas/fraction";
import { Fraction } from "@/domain/entities/fraction";

const createMock = jest.fn();
const updateMock = jest.fn();
const getByIdMock = jest.fn();

const dbApi: FractionDbApi = {
  db: {} as any,
  table: {} as any,
  create: createMock,
  update: updateMock,
  getById: getByIdMock,
};

describe("Fraction Repository", () => {
  const fractionRepository = new FractionRepository(dbApi);
  it("should create a fraction successfully", async () => {
    const fractionSelect: FractionSelect = {
      id: "1",
      name: "Fraction 1",
      percentage: "50",
      profileId: "123",
    };

    createMock.mockResolvedValue(fractionSelect);

    const fractionToCreate = new Fraction({
      name: "Fraction 1",
      percentage: 0.5,
      profileId: "123",
    });
    const fractionCreated = await fractionRepository.create(fractionToCreate);

    expect(createMock).toHaveBeenCalledWith(fractionToCreate.toInsert());
    expect(fractionCreated).toStrictEqual(Fraction.fromSelect(fractionSelect));
  });

  it("should update a fraction successfully", async () => {
    const fractionSelect: FractionSelect = {
      id: "1",
      name: "Fraction 2",
      percentage: "50",
      profileId: "123",
    };

    updateMock.mockResolvedValue(fractionSelect);

    const fractionUpdated = await fractionRepository.update("1", {
      name: "Fraction 2",
      percentage: "50",
    });

    expect(updateMock).toHaveBeenCalledWith("1", {
      name: "Fraction 2",
      percentage: "50",
    });
    expect(fractionUpdated).toStrictEqual(Fraction.fromSelect(fractionSelect));
  });

  it("should get a fraction successfully", async () => {
    const fractionSelect: FractionSelect = {
      id: "1",
      name: "Fraction 1",
      percentage: "50",
      profileId: "123",
    };

    getByIdMock.mockResolvedValue(fractionSelect);

    const fraction = await fractionRepository.get("1");

    expect(getByIdMock).toHaveBeenCalledWith("1");
    expect(fraction).toStrictEqual(Fraction.fromSelect(fractionSelect));
  });
});
