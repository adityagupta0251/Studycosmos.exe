import { Elysia, t } from "elysia";
import { ProjectsController } from "../../controllers/projects.controller";
import { authPlugin, protectedRoute } from "../../lib/auth-middleware";

const projectsController = new ProjectsController();

export const projectsRouter = new Elysia({ prefix: "/projects" })
  .use(authPlugin)
  .get("/list", projectsController.listProjects)
  .get("/:id", projectsController.getProjectDetails)
  .use(protectedRoute)
  .post("/create", projectsController.createProject)
  .guard({
    body: t.Object({
      checkifprojectadmin: t.UnionEnum(["dashboard", "settings", "playground"]),
    }),
  })
  .put("/update-projects/:id", projectsController.updateProject, {
    detail: { summary: "Update project with ID" },
  })
  .delete("/delete-projects/:id", projectsController.deleteProject, {
    detail: { summary: "Admin Project Deletion" },
  });
