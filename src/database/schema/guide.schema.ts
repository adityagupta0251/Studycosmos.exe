import { users } from "../schema";
import { integer, pgTable, varchar, serial, text, timestamp } from "drizzle-orm/pg-core";

export const Guide = pgTable("Guide", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length: 200}),
    content: text("content"),
    created_At: timestamp("created_at").defaultNow()

})
