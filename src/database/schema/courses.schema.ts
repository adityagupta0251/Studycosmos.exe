import {
    pgTable,
    text,
    varchar,
    timestamp,
    boolean,
    integer,
    serial
    
} from "drizzle-orm/pg-core";
import { User } from "./Auth/User.schema";

const Courses = pgTable("Course", {
    // Standardizing on auto-incrementing integer for the course ID
    id: serial("id").primaryKey(),
    
    title: varchar("title", { length: 200 }),
    description: text("description"),
    
    // FIX: Changed from integer to text to match User.id
    createdby: text("created_by").references(() => User.id),
    
    created_At: timestamp("created_at").defaultNow()
});

const PremiumCourses = pgTable("premium", {
    // Standardizing on auto-incrementing integer for the premium ID
    id: serial("id").primaryKey(),
    
    title: varchar("title", { length: 150 }),
    description: text("description"),
    
    // FIX: Changed from integer to text to match User.id
    createdby: text("created_by").references(() => User.id),
    
    created_At: timestamp("created_at").defaultNow(),
    active: boolean("active").default(true),
    plan: varchar("plan", { length: 50 }),
});

export { Courses, PremiumCourses };