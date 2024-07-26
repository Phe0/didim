import { FractionDbApi } from "@/db/api/fraction-db-api";
import { Repository } from "./repository";
import { Entity } from "../entities/entity";
import { Fraction } from "../entities/fraction";
import { FractionInsert } from "@/db/schemas/fraction";

export class FractionRepository implements Repository {
  constructor(private readonly fractionDbApi: FractionDbApi) {}
  async create(value: Fraction) {
    const result = await this.fractionDbApi.create(value.toInsert());
    return Fraction.fromSelect(result);
  }
  async update(id: string, value: Partial<FractionInsert>) {
    const result = await this.fractionDbApi.update(id, value);
    return Fraction.fromSelect(result);
  }
  async get(id: string) {
    const result = await this.fractionDbApi.getById(id);
    return Fraction.fromSelect(result);
  }
}
