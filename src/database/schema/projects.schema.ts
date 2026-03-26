import { integer, pgTable, varchar, text,timestamp } from "drizzle-orm/pg-core";
import { User } from "./Auth/User.schema.ts";



export const Projects = pgTable("users", {
  id: integer("id").primaryKey(),
  title: varchar("title", {length: 300}),
  description: text("description"),
  userId: text("user_Id").references(()=> User.id),
  created_At: timestamp("created_at").defaultNow()

});
