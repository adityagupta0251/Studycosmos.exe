import { aiRouter } from "../routes/ai/ai.routes";
import { courseRouter } from "../routes/course/course.routes";
import { guidesRouter } from "../routes/guides/guides.routes";
import { projectsRouter } from "../routes/projects/projects.routes";
import { teamsRouter } from "../routes/teams/teams.routes";
import { getStartedRouter } from "../routes/get-started.routes";
import { premiumRouter } from "../routes/premium.routes";
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

export const api = new Elysia({ prefix: "/api" })
  
  .use(aiRouter)
  .use(courseRouter)
  .use(guidesRouter)
  .use(projectsRouter)
  .use(teamsRouter)
  .use(getStartedRouter)
  .use(premiumRouter);
