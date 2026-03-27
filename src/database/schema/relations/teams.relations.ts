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

export const teamsRelations = relations(teams, ({ one, many }) => ({
  owner: one(user, {
    fields: [teams.ownerId],
    references: [user.id],
  }),
  members: many(teamMembers),
}));