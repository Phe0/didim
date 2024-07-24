import { FractionInsert } from "@/db/schemas/fraction";
import { Domain } from "./domain";

export namespace Fraction {
  export type Params = {
    id: number;
    name: string;
    percentage: number;
    profileId: string;
  };
}

export class Fraction implements Domain<FractionInsert> {
  id: number;
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
    };
  }
}
