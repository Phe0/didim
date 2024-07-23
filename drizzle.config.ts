import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: [
    "./db/schemas/user.ts",
    "./db/schemas/expense.ts",
    "./db/schemas/fraction.ts",
    "./db/schemas/category.ts",
    "./db/schemas/financial-details.ts",
  ],
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
