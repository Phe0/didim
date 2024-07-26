import { FractionInsert } from "@/db/schemas/fraction";
import { Entity } from "./entity";

export namespace Fraction {
  export type Params = {
    id: string;
    name: string;
    percentage: number;
    profileId: string;
  };
}

export class Fraction implements Entity {
  id: string;
  name: string;
  percentage: number;
  profileId: string;

  constructor(params: Fraction.Params) {
    this.id = params.id;
    this.name = params.name;
    this.percentage = params.percentage;
    this.profileId = params.profileId;
  }

  toInsert() {
    return {
      id: this.id,
      name: this.name,
      percentage: this.percentage.toString(),
      profileId: this.profileId,
    } as FractionInsert;
  }
}
