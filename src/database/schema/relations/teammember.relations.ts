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



export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
  member: one(user, {
    fields: [teamMembers.userId],
    references: [user.id],
  }),
}));
