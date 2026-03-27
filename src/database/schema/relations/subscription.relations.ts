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
import { subscriptions } from "../subscription.schema";



export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(user, {
    fields: [subscriptions.userId],
    references: [user.id],
  }),
}));