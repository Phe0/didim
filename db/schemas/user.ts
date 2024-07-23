import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { financialDetailsTable } from "./financial-details";

export const userTable = pgTable("user_table", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  firstTimeUser: boolean("first_time_user").notNull().default(true),
  financialDetailsId: integer("financial_details_id")
    .notNull()
    .references(() => financialDetailsTable.id, { onDelete: "no action" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type UserTable = typeof userTable;
export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect & {
  financialDetails: typeof financialDetailsTable.$inferSelect;
};
