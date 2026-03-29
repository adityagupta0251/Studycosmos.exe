import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../backend/src/database/db.connect.ts";
import { schema } from "./auth-schema.ts";

export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg", 
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  // This must match the Elysia route: .all("/auth/*", ...)
  basePath: "/auth", 
  baseURL: "http://localhost:3004",
  secret: process.env.BETTER_AUTH_SECRET,
});