import { users } from "../schema";
import { integer, pgTable, varchar, serial, text,timestamp,  } from "drizzle-orm/pg-core";

export const Teams = pgTable("Teams", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length: 200}),
    createdby: integer("created_by").references(()=> users.id)
    created_At: timestamp("created_at").defaultNow()
})