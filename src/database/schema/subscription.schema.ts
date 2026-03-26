import {
  pgTable,
  
  text,
  varchar,
  timestamp,
  boolean,
  integer
} from "drizzle-orm/pg-core";
import { User } from "./Auth/User.schema.ts";

export const Subscription = pgTable("subscription", {
    id: integer("id").primaryKey(),
    userId: text("user_Id").references(()=> User.id),
    plan: varchar("plan", {length: 50}),
    active: boolean("active").default(true),
    created_At: timestamp("created_At").defaultNow()
})

