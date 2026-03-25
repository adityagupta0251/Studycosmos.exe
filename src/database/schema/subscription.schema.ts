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

export const Subscription = pgTable("subscription", {
    id: serial("id").primaryKey(),
    userId: integer("user_Id").references(()=> users.id),
    plan: varchar("plan", {length: 50}),
    active: boolean("active").default(true),
    created_At: timestamp("created_At").defaultNow()
})

