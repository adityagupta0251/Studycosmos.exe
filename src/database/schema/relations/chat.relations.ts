import { relations } from "drizzle-orm";
import { Chat } from "../chat.schema";
import { user } from "../../../../auth-schema";

export const chatRelations = relations(Chat, ({ one }) => ({
  user: one(user, {
    fields: [Chat.userId],
    references: [user.id],
  }),
}));