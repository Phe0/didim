import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("categories_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: serial("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertCategory = typeof categoriesTable.$inferInsert;
export type SelectCategory = typeof categoriesTable.$inferSelect;
