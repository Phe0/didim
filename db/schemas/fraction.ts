import { numeric, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { profileTable } from "./profile";
import { relations } from "drizzle-orm";

export const fractionsTable = pgTable("fractions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: numeric("percentage", { scale: 2 }),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profileTable.id),
});

export const fractionsRelations = relations(fractionsTable, ({ one }) => ({
  profile: one(profileTable, {
    fields: [fractionsTable.profileId],
    references: [profileTable.id],
  }),
}));

export type FractionInsert = typeof fractionsTable.$inferInsert;
export type FractionSelect = typeof fractionsTable.$inferSelect;
