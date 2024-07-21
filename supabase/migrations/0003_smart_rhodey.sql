ALTER TABLE "user_config_table" DROP CONSTRAINT "user_config_table_user_id_unique";--> statement-breakpoint
ALTER TABLE "user_config_table" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user_config_table" DROP COLUMN IF EXISTS "user_id";