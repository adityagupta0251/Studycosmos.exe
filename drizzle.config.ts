// drizzle.config.ts

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:new_secure_password@localhost:5432/mydb",
  },
});
