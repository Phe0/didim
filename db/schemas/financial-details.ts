import {
  boolean,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const financialDetailsTable = pgTable("financial_details_table", {
  id: serial("id").primaryKey(),
  income: numeric("income", { scale: 2 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type FinancialDetailsTable = typeof financialDetailsTable;
export type InsertFinancialDetails = typeof financialDetailsTable.$inferInsert;
export type SelectFinancialDetails = typeof financialDetailsTable.$inferSelect;
