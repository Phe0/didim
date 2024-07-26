import { Domain } from "@/domain/domain";
import { PgTable } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export interface DbAPI<TInsert, TSelect> {
  db: PostgresJsDatabase;
  table: PgTable;

  create(value: TInsert): Promise<TSelect>;
  update(id: string, value: Partial<TInsert>): Promise<TSelect | null>;
  getById(id: string): Promise<TSelect | null>;
}
