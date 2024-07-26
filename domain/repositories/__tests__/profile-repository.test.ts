import { DbAPI } from "@/db/api/db-api";
import { ProfileInsert, ProfileSelect } from "@/db/schemas/profile";
import { Profile } from "@/domain/entities/profile";
import { ProfileRepository } from "../profile-repository";
import { ProfileDbApi } from "@/db/api/profile-db-api";

const createMock = jest.fn();
const updateMock = jest.fn();
const getByIdMock = jest.fn();

const dbApi: ProfileDbApi = {
  db: {} as any,
  table: {} as any,
  create: createMock,
  update: updateMock,
  getById: getByIdMock,
};

describe("Profile Repository", () => {
  const profileRepository = new ProfileRepository(dbApi);
  it("should create a profile successfully", async () => {
    const profileSelect: ProfileSelect = {
      id: "1",
      name: "John Doe",
      email: "test@email.com",
      income: "1000",
      firstTimeUser: false,
    };

    createMock.mockResolvedValue(profileSelect);

    const profileToCreate = new Profile({
      name: "John Doe",
      email: "test@email.com",
      income: 1000,
    });
    const profileCreated = await profileRepository.create(profileToCreate);

    expect(createMock).toHaveBeenCalledWith(profileToCreate.toInsert());
    expect(profileCreated).toStrictEqual(Profile.fromSelect(profileSelect));
  });

  it("should update a profile successfully", async () => {
    const profileSelect: ProfileSelect = {
      id: "1",
      name: "Jane Doe",
      email: "john@email.com",
      income: null,
      firstTimeUser: false,
    };

    updateMock.mockResolvedValue(profileSelect);

    const profileUpdated = await profileRepository.update("1", {
      name: "Jane Doe",
    });

    expect(updateMock).toHaveBeenCalledWith("1", { name: "Jane Doe" });
    expect(profileUpdated).toStrictEqual(Profile.fromSelect(profileSelect));
  });

  it("should get a profile successfully", async () => {
    const profileSelect: ProfileSelect = {
      id: "1",
      name: "John Doe",
      email: "test@email.com",
      firstTimeUser: false,
      income: "1000",
    };
    getByIdMock.mockResolvedValue(profileSelect);

    const gottenProfile = await profileRepository.get("1");

    expect(getByIdMock).toHaveBeenCalledWith("1");
    expect(gottenProfile).toStrictEqual(Profile.fromSelect(profileSelect));
  });
});
