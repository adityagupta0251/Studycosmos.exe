import { Elysia } from "elysia";
import { db, connectDb } from "./src/database/db.connect";
import { api } from "./src/api/route";
import { swagger } from "@elysiajs/swagger";

await connectDb();

const app = new Elysia()
  .use(swagger())
  .decorate("db", db)
  .use(api)

  .get("/", ({ db }) => {
    return { message: "Connected to Drizzle!" };
  })
  .listen(3004);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
