import { InsertUserConfig, SelectUserConfig } from "@/db/schemas/user-config";

interface UserConfigType {
  id: string;
  income?: number;
  firstTimeUser?: boolean;
}

export class UserConfig {
  id: string;
  income?: number;
  firstTimeUser?: boolean;

  constructor({ id, income, firstTimeUser = true }: UserConfigType) {
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
