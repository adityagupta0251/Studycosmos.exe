import { Elysia } from "elysia";
import { db, connectDb } from "./src/database/db.connect";
// Use prefix in the constructor instead of .group for cleaner syntax
export const courseRouter = new Elysia({ prefix: "/course" })
  .get("/:id", ({ params: { id } }) => {
    return {
      message: `Course details for course ID: ${id}`,
    };
  })
  .post("/", ({ body }) => {
    return { message: "Course created!", data: body };
  })
  .post("/", () => {
    return { message: "Course created successfully" };
  });
