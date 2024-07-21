import { eq } from "drizzle-orm";
import { db } from "@/db";
import { usersTable } from "@/db/schemas/user";
import { User } from "@/domain/user";

export class UserAPI {
  private table = usersTable;

  async create(user: User) {
    const result = await db
      .insert(this.table)
      .values(user.toInsert())
      .returning({ id: this.table.id });

    return result[0].id;
  }

  async getById(id: number) {
    const select = await db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    return select[0] ? User.fromSelect(select[0]) : null;
  }
}
