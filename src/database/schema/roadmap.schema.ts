import {
  pgTable,
  
  text,
  varchar,
  timestamp,
  boolean,
  integer
} from "drizzle-orm/pg-core";

export const RoadMaps = pgTable("Roadmaps", {
    id: integer("id").primaryKey(),
    title: varchar("title", {length: 200}),
    description: text("description"),
    isAt: boolean("is_ai").default(false),
    created_At: timestamp("created_at").defaultNow()


})