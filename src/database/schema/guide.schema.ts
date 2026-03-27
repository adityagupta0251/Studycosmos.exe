import { user } from "../../../auth-schema"

import { integer, pgTable, varchar, text, timestamp, serial, index } from "drizzle-orm/pg-core";

export const guide = pgTable(
  "guide",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    content: text("content").notNull(),
    createdBy: text("created_by").references(() => user.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("guide_created_by_idx").on(t.createdBy)],
);