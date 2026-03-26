import { User } from "./Auth/User.schema.ts";
import { integer, pgTable, varchar,  text,timestamp,  } from "drizzle-orm/pg-core";

export const Teams = pgTable("Teams", {
    id: integer("id").primaryKey(),
    title: varchar("title", {length: 200}),
    createdby: text("created_by").references(()=> User.id),
    created_At: timestamp("created_at").defaultNow()
})