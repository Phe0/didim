import { Domain } from "@/domain/domain";
import { PgTable } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export interface DbAPI<TInsert> {
  db: PostgresJsDatabase;
  table: PgTable;

  create(value: Domain): Promise<Domain>;
  update(value: TInsert): Promise<Domain | null>;
  getById(id: string): Promise<Domain | null>;
}
