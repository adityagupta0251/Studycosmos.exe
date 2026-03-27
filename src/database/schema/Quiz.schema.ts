import {
  pgTable,
  text,
  varchar,
  timestamp,
  serial,
  index
} from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema"

import { t } from "elysia";
export const quiz = pgTable(
  "quiz",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    createdBy: text("created_by")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("quiz_created_by_idx").on(t.createdBy)],
);