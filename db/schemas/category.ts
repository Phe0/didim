import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./user";

export const categoriesTable = pgTable("categories_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: serial("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "no action" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof categoriesTable.$inferInsert;
export type SelectUser = typeof categoriesTable.$inferSelect;
