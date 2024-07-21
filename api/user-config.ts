import { eq } from "drizzle-orm";
import { db } from "@/db";
import { InsertUserConfig, userConfigTable } from "@/db/schemas/user-config";
import { UserConfig } from "@/domain/user-config";

export class UserConfigAPI {
  private table = userConfigTable;

  async create(user: UserConfig) {
    const result = await db
      .insert(this.table)
      .values(user.toInsert())
      .returning();

    return UserConfig.fromSelect(result[0]);
  }

  async getById(id: string) {
    const select = await db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    return select[0] ? UserConfig.fromSelect(select[0]) : null;
  }

  async update(userConfig: InsertUserConfig) {
    console.log("userConfig", userConfig);
    const result = await db
      .update(this.table)
      .set(userConfig)
      .where(eq(this.table.id, userConfig.id))
      .returning();
    console.log("result", result);
    return result[0] ? UserConfig.fromSelect(result[0]) : null;
  }
}

export const userConfigAPI = new UserConfigAPI();
