ALTER TABLE "quiz" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "quiz" ALTER COLUMN "created_by" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "Teams" ALTER COLUMN "created_by" SET DATA TYPE text;