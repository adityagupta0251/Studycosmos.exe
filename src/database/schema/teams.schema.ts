import { user } from "../../../auth-schema"

import { integer, pgTable, varchar,  text,timestamp, serial, index, uniqueIndex,  } from "drizzle-orm/pg-core";

export const teams = pgTable(
  "teams",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 200 }).notNull(),
    ownerId: text("owner_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("teams_owner_id_idx").on(t.ownerId)],
);

// team members = many-to-many
export const teamMembers = pgTable(
  "team_members",
  {
    id: serial("id").primaryKey(),
    teamId: integer("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    role: varchar("role", { length: 30 }).notNull().default("member"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("team_members_team_id_idx").on(t.teamId),
    index("team_members_user_id_idx").on(t.userId),
    uniqueIndex("team_members_team_user_unique").on(t.teamId, t.userId),
  ],
);