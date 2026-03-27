import {
  pgTable,
  
  text,
  varchar,
  timestamp,
  boolean,
  integer,
  serial,
  index
} from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema"


export const roadmaps = pgTable(
  "roadmaps",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    description: text("description"),
    isAi: boolean("is_ai").default(false).notNull(),
    createdBy: text("created_by").references(() => user.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("roadmaps_created_by_idx").on(t.createdBy)],
);
