import { Elysia } from "elysia";
import { TeamsController } from "../../controllers/teams.controller";
import { authPlugin, protectedRoute } from "../../lib/auth-middleware";

const teamsController = new TeamsController();

export const teamsRouter = new Elysia({ prefix: "/teams" })
  .use(authPlugin)
  .use(protectedRoute)
  .post('/create-teams', teamsController.createTeam);
