import { ProfileDbApi } from "@/db/api/profile-db-api";
import { Repository } from "./repository";
import { Profile } from "../entities/profile";
import { ProfileInsert } from "@/db/schemas/profile";

export class ProfileRepository implements Repository {
  constructor(private readonly profileDbApi: ProfileDbApi) {}

  async create(value: Profile): Promise<Profile> {
    const result = await this.profileDbApi.create(value.toInsert());
    return Profile.fromSelect(result);
  }
  async update(id: string, value: Partial<ProfileInsert>): Promise<Profile> {
    const result = await this.profileDbApi.update(id, value);
    return Profile.fromSelect(result);
  }
  async get(id: string): Promise<Profile> {
    const result = await this.profileDbApi.getById(id);
    return Profile.fromSelect(result);
  }
}
