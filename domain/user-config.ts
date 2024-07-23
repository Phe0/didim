import { InsertUserConfig, SelectUserConfig } from "@/db/schemas/user-config";

export namespace UserConfig {
  export type Params = {
    id: string;
    income?: number;
    firstTimeUser?: boolean;
  };
}

export class UserConfig {
  id: string;
  income?: number;
  firstTimeUser?: boolean;

  constructor({ id, income, firstTimeUser = true }: UserConfig.Params) {
    this.id = id;
    this.income = income;
    this.firstTimeUser = firstTimeUser;
  }

  toInsert(): InsertUserConfig {
    return {
      id: this.id,
      income: this.income?.toString(),
      firstTimeUser: this.firstTimeUser,
    };
  }

  static fromSelect(select: SelectUserConfig): UserConfig {
    return new UserConfig({
      id: select.id,
      income: parseFloat(select.income!),
      firstTimeUser: select.firstTimeUser,
    });
  }
}
