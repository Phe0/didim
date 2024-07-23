CREATE TABLE IF NOT EXISTS "user_table" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"first_time_user" boolean DEFAULT true NOT NULL,
	"financial_details_id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "financial_details_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"income" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_table" ADD CONSTRAINT "user_table_financial_details_id_financial_details_table_id_fk" FOREIGN KEY ("financial_details_id") REFERENCES "public"."financial_details_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
