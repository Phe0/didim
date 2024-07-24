import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: [
    "./db/schemas/fraction.ts",
    "./db/schemas/profile.ts",
    "./db/schemas/user.ts",
  ],
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
