import { integer, pgTable, varchar, text,timestamp, serial, index } from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema"



export const projects = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 300 }).notNull(),
    description: text("description"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("projects_user_id_idx").on(t.userId)],
);