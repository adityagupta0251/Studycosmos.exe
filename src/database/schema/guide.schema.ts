import { User } from "./Auth/User.schema";
import { integer, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const Guide = pgTable("Guide", {
    id: integer("id").primaryKey(),
    title: varchar("title", {length: 200}),
    content: text("content"),
    created_At: timestamp("created_at").defaultNow()

})
