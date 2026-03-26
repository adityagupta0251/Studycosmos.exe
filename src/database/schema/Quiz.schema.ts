import {
  pgTable,
  text,
  varchar,
  timestamp,
  serial
} from "drizzle-orm/pg-core";
import { User } from "./Auth/User.schema.ts";

export const Quiz = pgTable("quiz", {
    // Standard auto-incrementing ID for the quiz
    id: serial("id").primaryKey(),
    
    title: varchar("title", { length: 200 }),
    
    // FIX: Changed from integer to text to match User.id type
    createdby: text("created_by").references(() => User.id),
    
    created_At: timestamp("created_at").defaultNow()
});