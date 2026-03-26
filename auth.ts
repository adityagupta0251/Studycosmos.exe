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
    provider: "pg", // or "mysql", "sqlite"
    schema: schema
  }),

  
});

