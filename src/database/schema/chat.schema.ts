import {
    pgTable,
    
    text,
    varchar,
    timestamp,
    boolean,
    integer
} from "drizzle-orm/pg-core";
import { User } from "./Auth/User.schema";

export const Chat = pgTable("chat_message", {
    id: integer("id").primaryKey(),
    userId: text("user_id").references(() => User.id),
    message: text("message"),
    role: varchar("role", { length: 20 }),
    createdAt: timestamp("created_at").defaultNow()
})
