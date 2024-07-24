import { boolean, numeric, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const profileTable = pgTable("profile", {
  id: uuid("id")
    .primaryKey()
    .references(() => userTable.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  income: numeric("income", { scale: 2 }),
  firstTimeUser: boolean("first_time_user").notNull().default(false),
});

export type ProfileInsert = typeof profileTable.$inferInsert;
export type ProfileSelect = typeof profileTable.$inferSelect;
