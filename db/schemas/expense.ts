import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { categoriesTable } from "./category";
import { usersTable } from "./user";

export const expensesTable = pgTable("expenses_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  value: numeric("value", { scale: 2 }),
  userId: serial("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "no action" }),
  categoryId: serial("category_id").references(() => categoriesTable.id, {
    onDelete: "no action",
  }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertExpense = typeof expensesTable.$inferInsert;
export type SelectExpense = typeof expensesTable.$inferSelect;
