import {
  ProfileInsert,
  ProfileSelect,
  profileTable,
} from "@/db/schemas/profile";
import { Entity } from "./entity";

export namespace Profile {
  export type Params = {
    id?: string;
    name: string;
    email: string;
    income?: number;
    firstTimeUser?: boolean;
  };
}

export class Profile implements Entity {
  id?: string;
  name: string;
  email: string;
  income?: number;
  firstTimeUser: boolean;

  constructor(params: Profile.Params) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.income = params.income;
    this.firstTimeUser = params.firstTimeUser ?? false;
  }

  toInsert() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      income: this.income ? this.income.toString() : undefined,
      firstTimeUser: this.firstTimeUser,
    } as ProfileInsert;
  }

  static fromSelect(value: ProfileSelect) {
    return new Profile({
      id: value.id,
      name: value.name,
      email: value.email,
      income: value.income ? parseInt(value.income) : undefined,
      firstTimeUser: value.firstTimeUser,
    });
  }
}
