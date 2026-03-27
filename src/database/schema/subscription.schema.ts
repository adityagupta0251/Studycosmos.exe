import {
  pgTable,
  
  text,
  varchar,
  timestamp,
  boolean,
  integer,
  serial,
  index,
  uniqueIndex
} from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema"


export const subscriptions = pgTable(
  "subscriptions",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    plan: varchar("plan", { length: 50 }).notNull(),
    active: boolean("active").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("subscriptions_user_id_idx").on(t.userId),
    uniqueIndex("subscriptions_user_id_unique").on(t.userId),
  ],
);