DROP TABLE "users_table";--> statement-breakpoint
ALTER TABLE "expenses_table" DROP CONSTRAINT "expenses_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "fractions_table" DROP CONSTRAINT "fractions_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "categories_table" DROP CONSTRAINT "categories_table_user_id_users_table_id_fk";
