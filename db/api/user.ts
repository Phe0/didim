import { eq, InferModelFromColumns, InferSelectModel } from "drizzle-orm";
import { db } from "@/db";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DbAPI } from "./DbAPI";
import { InsertUser, SelectUser, userTable, UserTable } from "../schemas/user";
import { User } from "@/domain/user";
import { financialDetailsTable } from "../schemas/financial-details";

export class UserDbAPI implements DbAPI<InsertUser> {
  db: PostgresJsDatabase;
  table: UserTable = userTable;

  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async create(user: User) {
    const result = await this.db
      .insert(this.table)
      .values(user.toInsert())
      .returning();

    return User.fromSelect(result[0] as SelectUser);
  }

  async getById(id: string) {
    const select = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        firstTimeUser: userTable.firstTimeUser,
        financialDetailsId: userTable.financialDetailsId,
        createdAt: userTable.createdAt,
        updatedAt: userTable.updatedAt,
        financialDetails: {
          id: financialDetailsTable.id,
          income: financialDetailsTable.income,
        },
      })
      .from(this.table)
      .where(eq(this.table.id, id))
      .leftJoin(
        financialDetailsTable,
        eq(userTable.financialDetailsId, financialDetailsTable.id)
      )
      .limit(1);
    return select[0] ? User.fromSelect(select[0] as SelectUser) : null;
  }

  async update(user: InsertUser) {
    const result = await db
      .update(this.table)
      .set(user)
      .where(eq(this.table.id, user.id))
      .returning();
    return result[0] ? User.fromSelect(result[0] as SelectUser) : null;
  }
}

export const userDbAPI = new UserDbAPI(db);
