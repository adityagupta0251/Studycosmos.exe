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

export const Quiz = pgTable("quiz", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length: 200}),
    createdby: integer("created_by").references(()=> users.id),
    created_At: timestamp("created_at").defaultNow()
})
