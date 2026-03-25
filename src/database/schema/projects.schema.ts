import { integer, pgTable, varchar, serial, text,timestamp } from "drizzle-orm/pg-core";
import { users } from "../schema";



export const Projects = pgTable("users", {
  id: serial("id").primaryKey(),
  title: varchar("title", {length: 300}),
  description: text("description"),
  userId: integer("user_Id").references(()=> users.id),
  created_At: timestamp("created_at").defaultNow()

});
