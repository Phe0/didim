import { InsertUserConfig, SelectUserConfig } from "@/db/schemas/user-config";
import { Domain } from "./domain";

export namespace UserConfig {
  export type Params = {
    id: string;
    income?: number;
    firstTimeUser?: boolean;
  };
}

export class UserConfig implements Domain {
  id: string;
  income?: number;
  firstTimeUser?: boolean;

  constructor({ id, income, firstTimeUser = true }: UserConfig.Params) {
    this.id = id;
    this.income = income;
    this.firstTimeUser = firstTimeUser;
  }
  fromSelect<TSelect>(select: TSelect): Domain {
    throw new Error("Method not implemented.");
  }

  toInsert<InsertUserConfig>() {
    return {
      id: this.id,
      income: this.income?.toString(),
      firstTimeUser: this.firstTimeUser,
    } as InsertUserConfig;
  }

  static fromSelect(select: SelectUserConfig): UserConfig {
    return new UserConfig({
      id: select.id,
      income: parseFloat(select.income!),
      firstTimeUser: select.firstTimeUser,
    });
  }
}
