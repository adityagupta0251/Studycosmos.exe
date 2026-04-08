import { Elysia } from 'elysia'
import { GuidesController } from "../../controllers/guides.controller";
import { authPlugin, protectedRoute } from "../../lib/auth-middleware";

const guidesController = new GuidesController();

export const guidesRouter = new Elysia({ prefix: "/guides" })
  .use(authPlugin)
  .post('/sign-in', guidesController.signIn)
  .post('/sign-up', guidesController.signUp)
  .use(protectedRoute)
  .post('/profile', guidesController.profile);
