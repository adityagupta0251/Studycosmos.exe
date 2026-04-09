import { Elysia } from "elysia";
import { auth } from "../../auth";

export const authPlugin = new Elysia({ name: "auth-plugin" })
  .derive({ as: 'global' }, async ({ request }) => {
    try {
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      return {
        user: session?.user ?? null,
        session: session?.session ?? null,
      };
    } catch (error) {
      return {
        user: null,
        session: null,
      };
    }
  });

export const protectedRoute = (app: Elysia) =>
  app.use(authPlugin).guard({
    beforeHandle: ({ user, set }) => {
      if (!user) {
        set.status = 401;
        return {
          message: "Unauthorized",
        };
      }
    },
  });
