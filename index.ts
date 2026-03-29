import { Elysia } from "elysia";
import { db, connectDb } from "./src/database/db.connect";
import { api } from "./src/api/route";
import { swagger } from "@elysiajs/swagger";
import { auth } from "./auth";

await connectDb();

const app = new Elysia()
  .use(swagger())
  .decorate("db", db)
  // Better Auth Handler
  .all("/auth/*", ({ request, set }) => {
    const METHODS = ["POST", "GET"];
    if (!METHODS.includes(request.method)) {
      set.status = 405;
      return "Method Not Allowed";
    }
    return auth.handler(request);
  })
  .use(api) // This mounts /api routes
  .get("/", () => ({ message: "Connected to Drizzle!" }))
  .listen(3004);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);