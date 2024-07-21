CREATE TABLE IF NOT EXISTS "user_config_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"income" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "user_config_table_user_id_unique" UNIQUE("user_id")
);
