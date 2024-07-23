import { InsertUser, SelectUser } from "@/db/schemas/user";
import { Domain } from "./domain";
import { FinancialDetails } from "./financial-details";

export namespace User {
  export type Params = {
    id: string;
    name: string;
    financialDetails: FinancialDetails;
    firstTimeUser?: boolean;
  };
}

export class User implements Domain {
  id: string;
  name: string;
  financialDetails: FinancialDetails;
  firstTimeUser?: boolean;

  constructor({
    id,
    name,
    financialDetails,
    firstTimeUser = true,
  }: User.Params) {
    this.id = id;
    this.name = name;
    this.financialDetails = financialDetails;
    this.firstTimeUser = firstTimeUser;
  }

  toInsert<InsertUser>() {
    return {
      id: this.id,
      name: this.name,
      firstTimeUser: this.firstTimeUser,
      financialDetailsId: this.financialDetails.id,
    } as InsertUser;
  }

  static fromSelect(select: SelectUser): User {
    return new User({
      id: select.id,
      name: select.name,
      financialDetails: FinancialDetails.fromSelect(select.financialDetails),
      firstTimeUser: select.firstTimeUser,
    });
  }
}
