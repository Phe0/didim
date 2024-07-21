import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const fractionsTable = pgTable("fractions_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: numeric("percentage", { scale: 2 }),
  userId: serial("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertFraction = typeof fractionsTable.$inferInsert;
export type SelectFraction = typeof fractionsTable.$inferSelect;
