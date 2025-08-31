CREATE TABLE "client" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"cpf" varchar(14) NOT NULL,
	"rg" varchar(13) NOT NULL,
	"phone" varchar(18) NOT NULL,
	"second_phone" varchar(18),
	"role" text DEFAULT 'client',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"role" text DEFAULT 'attendant' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
