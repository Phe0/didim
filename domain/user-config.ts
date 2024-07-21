import { InsertUserConfig, SelectUserConfig } from "@/db/schemas/user-config";

export class UserConfig {
  constructor(public id: string, public income?: number) {}

  toInsert(): InsertUserConfig {
    return {
      id: this.id,
      income: this.income?.toString(),
    };
  }

  static fromSelect(select: SelectUserConfig): UserConfig {
    return new UserConfig(select.id, parseFloat(select.income!));
  }
}
