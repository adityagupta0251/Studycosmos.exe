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
import { teamMembers, teams } from "../teams.schema";
import { user } from "../../../../auth-schema";
import { relations } from "drizzle-orm";
import { projects } from "../projects.schema";


export const projectsRelations = relations(projects, ({ one }) => ({
  user: one(user, {
    fields: [projects.userId],
    references: [user.id],
  }),
}));