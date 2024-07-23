import { eq, InferModelFromColumns, InferSelectModel } from "drizzle-orm";
import { db } from "@/db";
import {
  InsertUserConfig,
  SelectUserConfig,
  UserConfigTable,
  userConfigTable,
} from "@/db/schemas/user-config";
import { UserConfig } from "@/domain/user-config";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DbAPI } from "./DbAPI";

export class UserConfigDbAPI implements DbAPI<InsertUserConfig> {
  db: PostgresJsDatabase;
  table: UserConfigTable;

  constructor(db: PostgresJsDatabase, table: UserConfigTable) {
    this.db = db;
    this.table = table;
  }

  async create(user: UserConfig) {
    const result = await this.db
      .insert(this.table)
      .values(user.toInsert())
      .returning();

    return UserConfig.fromSelect(result[0] as SelectUserConfig);
  }

  async getById(id: string) {
    const select = await db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    return select[0]
      ? UserConfig.fromSelect(select[0] as SelectUserConfig)
      : null;
  }

  async update(userConfig: InsertUserConfig) {
    const result = await db
      .update(this.table)
      .set(userConfig)
      .where(eq(this.table.id, userConfig.id))
      .returning();
    return result[0]
      ? UserConfig.fromSelect(result[0] as SelectUserConfig)
      : null;
  }
}

export const userConfigAPI = new UserConfigDbAPI(db, userConfigTable);
