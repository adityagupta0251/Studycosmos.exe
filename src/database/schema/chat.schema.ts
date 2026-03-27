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

export const Chat = pgTable(
  "chat_messages",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    message: text("message").notNull(),
    role: varchar("role", { length: 20 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("chat_messages_user_id_idx").on(t.userId)],
);