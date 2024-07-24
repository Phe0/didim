import { ProfileInsert, profileTable } from "@/db/schemas/profile";
import { Domain } from "./domain";

export namespace Profile {
  export type Params = {
    id: string;
    name: string;
    email: string;
    income: number;
    firstTimeUser: boolean;
  };
}

export class Profile implements Domain<ProfileInsert> {
  id: string;
  name: string;
  email: string;
  income: number;
  firstTimeUser: boolean;

  constructor(params: Profile.Params) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.income = params.income;
    this.firstTimeUser = params.firstTimeUser;
  }

  toInsert() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      income: this.income.toString(),
      firstTimeUser: this.firstTimeUser,
    };
  }
}
