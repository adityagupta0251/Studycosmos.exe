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

const Courses = pgTable("Course", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length:200}),
    description: text("description"),
    createdby: integer("created_by").references(()=> users.id),
    created_At: timestamp("created_at").defaultNow()
})

const PremiumCourses = pgTable("premium", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length: 150}),
    description: text("description"),
    createdby: integer("created_by").references(()=> users.id),
    created_At: timestamp("created_at").defaultNow(),
    active: boolean("active").default(true),
    plan: varchar("plan", {length: 50}),

})

export {Courses, PremiumCourses}

