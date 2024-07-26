import {
  FractionInsert,
  FractionSelect,
  fractionTable,
} from "../schemas/fraction";
import { DbAPI } from "./db-api";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";

export class FractionDbApi implements DbAPI<FractionInsert, FractionSelect> {
  db: PostgresJsDatabase;
  table = fractionTable;

  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async create(value: FractionInsert) {
    const result = await this.db.insert(this.table).values(value).returning();
    return result[0];
  }

  async update(id: string, value: Partial<FractionInsert>) {
    const result = await this.db
      .update(this.table)
      .set(value)
      .where(eq(this.table.id, "1"))
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
