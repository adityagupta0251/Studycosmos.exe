import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
    integer
} from "drizzle-orm/pg-core";
import { users } from "../schema";

export const Chat = pgTable("chat_message", {
    id: serial("id").primaryKey()
    userId: integer("user_id").references(() => users.id),
    message: text("message"),
    role: varchar("role", { length: 20 }),
    createdAt: timestamp("created_at").defaultNow()
});
})