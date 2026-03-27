import {
    pgTable,
    text,
    varchar,
    timestamp,
    boolean,
    integer,
    serial,
    index
    
} from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema"

export const courses = pgTable(
  "courses",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    description: text("description"),
    createdBy: text("created_by")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("courses_created_by_idx").on(t.createdBy)],
);


export const premiumCourses = pgTable(
  "premium_courses",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 150 }).notNull(),
    description: text("description"),
    createdBy: text("created_by")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    active: boolean("active").default(true).notNull(),
    plan: varchar("plan", { length: 50 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("premium_courses_created_by_idx").on(t.createdBy)],
);

