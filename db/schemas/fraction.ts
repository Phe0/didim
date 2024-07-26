import { numeric, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { profileTable } from "./profile";
import { relations } from "drizzle-orm";

export const fractionTable = pgTable("fractions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  percentage: numeric("percentage", { scale: 2 }).notNull(),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profileTable.id),
});

export const fractionsRelations = relations(fractionTable, ({ one }) => ({
  profile: one(profileTable, {
    fields: [fractionTable.profileId],
    references: [profileTable.id],
  }),
}));

export type FractionInsert = typeof fractionTable.$inferInsert;
export type FractionSelect = typeof fractionTable.$inferSelect;
