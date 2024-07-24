import { PgTable, TableConfig } from "drizzle-orm/pg-core";
import { FractionInsert, fractionTable } from "../schemas/fraction";
import { DbAPI } from "./DbAPI";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { Domain } from "@/domain/domain";
import { Fraction } from "@/domain/fraction";
import { eq } from "drizzle-orm";

export class FractionDbApi implements DbAPI<FractionInsert> {
  db: PostgresJsDatabase;
  table = fractionTable;

  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async create(value: FractionInsert): Promise<Fraction> {
    const result = await this.db.insert(this.table).values(value).returning();
    return new Fraction({
      id: result[0].id,
      name: result[0].name,
      profileId: result[0].profileId,
      percentage: Number(result[0].percentage),
    });
  }

  async update(
    id: string,
    value: Partial<FractionInsert>
  ): Promise<Fraction | null> {
    const result = await this.db
      .update(this.table)
      .set(value)
      .where(eq(this.table.id, "1"))
      .returning();

    return new Fraction({
      id: result[0].id,
      name: result[0].name,
      profileId: result[0].profileId,
      percentage: Number(result[0].percentage),
    });
  }
  async getById(id: string): Promise<Fraction | null> {
    const result = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id));

    return new Fraction({
      id: result[0].id,
      name: result[0].name,
      profileId: result[0].profileId,
      percentage: Number(result[0].percentage),
    });
  }
}
