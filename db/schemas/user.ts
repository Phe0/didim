import { pgSchema, uuid } from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");

export const userTable = authSchema.table("user", {
  id: uuid("id").primaryKey(),
});
