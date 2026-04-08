import { Elysia } from "elysia";
import { CourseController } from "../../controllers/course.controller";

const courseController = new CourseController();

export const courseRouter = new Elysia({ prefix: "/course" })
  .get("/:id", courseController.getCourse)
  .post("/", courseController.createCourse);
