import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ProfileInsert, ProfileSelect, profileTable } from "../schemas/profile";
import { DbAPI } from "./db-api";
import { eq } from "drizzle-orm";

export class ProfileDbApi implements DbAPI<ProfileInsert, ProfileSelect> {
  db: PostgresJsDatabase;
  table = profileTable;

  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async create(value: ProfileInsert) {
    const result = await this.db.insert(this.table).values(value).returning();
    return result[0];
  }

  async update(id: string, value: Partial<ProfileInsert>) {
    const result = await this.db
      .update(this.table)
      .set(value)
      .where(eq(this.table.id, id))
      .returning();
    return result[0];
  }

  async getById(id: string) {
    const result = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);

    return result[0];
  }
}
