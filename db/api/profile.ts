import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ProfileInsert, profileTable } from "../schemas/profile";
import { DbAPI } from "./DbAPI";
import { Profile } from "@/domain/profile";
import { eq } from "drizzle-orm";

export class ProfileDbApi implements DbAPI<ProfileInsert> {
  db: PostgresJsDatabase;
  table = profileTable;

  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async create(value: ProfileInsert): Promise<Profile> {
    const result = await this.db.insert(this.table).values(value).returning();
    return new Profile({
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      income: Number(result[0].income),
      firstTimeUser: result[0].firstTimeUser,
    });
  }

  async update(
    id: string,
    value: Partial<ProfileInsert>
  ): Promise<Profile | null> {
    const result = await this.db
      .update(this.table)
      .set(value)
      .where(eq(this.table.id, id))
      .returning();
    return new Profile({
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      income: Number(result[0].income),
      firstTimeUser: result[0].firstTimeUser,
    });
  }

  async getById(id: string): Promise<Profile | null> {
    const result = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id));

    return new Profile({
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      income: Number(result[0].income),
      firstTimeUser: result[0].firstTimeUser,
    });
  }
}
