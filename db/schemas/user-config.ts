import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userConfigTable = pgTable("user_config_table", {
  id: text("id").primaryKey(),
  income: numeric("income", { scale: 2 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUserConfig = typeof userConfigTable.$inferInsert;
export type SelectUserConfig = typeof userConfigTable.$inferSelect;
