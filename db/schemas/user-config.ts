import {
  boolean,
  numeric,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const userConfigTable = pgTable("user_config_table", {
  id: text("id").primaryKey(),
  income: numeric("income", { scale: 2 }),
  firstTimeUser: boolean("first_time_user").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUserConfig = typeof userConfigTable.$inferInsert;
export type SelectUserConfig = typeof userConfigTable.$inferSelect;
