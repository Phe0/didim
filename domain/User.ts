import { InsertUser, SelectUser } from "@/db/schemas/user";

export class User {
  constructor(
    public name: string,
    public email: string,
    public income?: number
  ) {}

  toInsert(): InsertUser {
    return {
      name: this.name,
      email: this.email,
      income: this.income?.toString(),
    };
  }

  static fromSelect(select: SelectUser): User {
    return new User(select.name, select.email, parseFloat(select.income!));
  }
}
